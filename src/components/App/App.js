import React, { Component } from 'react'

import Header from '../Header'
import RandomPlanet from '../RandomPlanet'
import ItemList from '../ItemList'
import PersonDetails from '../PersonDetails'

import './App.css'

class App extends Component {

  constructor() {
    super();

    this.state = {
      selectedPerson: null
    }
  }

  onPersonSelected = (id) => {
    this.setState({
      selectedPerson: id
    })

    console.log(this.state)
  }

  render() {
    return (
      <div className="container" >
        <Header />
        <RandomPlanet />

        <div className="row mb2">
          <div className="col-md-6">
            <ItemList onItemSelected={this.onPersonSelected} />
          </div>
          <div className="col-md-6">
            <PersonDetails personId={this.state.selectedPerson} />
          </div>
        </div>
      </div>
    );
  }
};

export default App
