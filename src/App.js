import React from "react";
import axios from "axios";
import './App.css';
import DisplayCat from "./components/DisplayCat";

const alice = {
  picture: "https://icdn.lenta.ru/images/2020/01/28/17/20200128170822958/square_320_9146846fb3b1bfae5672755bc1896214.jpg",
  fact: "This cat is angry"
}

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      cat: alice
    }
    this.getCat = this.getCat.bind(this);
  }

  getCat() {
    let newCatFact = {};
    // Send the request
    axios.get('https://api.thecatapi.com/v1/images/search')
      // Extract the DATA from the received response
      .then(response => response.data)
      // Use this data to update the state
      .then(data => {
        newCatFact.picture = data[0].url;
        this.setState({
          cat: newCatFact
        })
      });
    axios.get('http://cat-fact.herokuapp.com/Facts')
      .then(response => response.data)
      .then(data => {
        newCatFact.fact = data.all[Math.floor(data.all.length * Math.random())].text;
        this.setState({
          cat: newCatFact
        })
      })
  }

  render(){
    return (
      <div className="App">
        <DisplayCat cat={this.state.cat} />
        <button type="button" className="Catbtn" onClick={this.getCat}>MEOW</button>
      </div>
    )
  }
}

export default App;
