import React, { Component } from 'react'

import SwapiService from '../../services/swapiService';

import './RandomPlanet.css'

class RandomPlanet extends Component {

  render() {

    return (
      <div className="random-planet jumbotron rounded">
        <img className="planet-image"
          src={`https://starwars-visualguide.com/assets/img/planets/1.jpg`} />
        <div>
          <h4>Tatooine</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Population</span>
              <span>population</span>
            </li>
            <li className="list-group-item">
              <span className="term">Rotation Period</span>
              <span>rotationPeriod</span>
            </li>
            <li className="list-group-item">
              <span className="term">Diameter</span>
              <span>diameter</span>
            </li>
          </ul>
        </div>
      </div>

    );
  }
}

export default RandomPlanet
