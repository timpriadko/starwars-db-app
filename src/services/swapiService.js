export default class SwapiService {

  _apiBase = 'https://swapi.dev/api';
  _apiImage = 'https://starwars-visualguide.com';

  async getResource(url) {
    const res = await fetch(`${this._apiBase}${url}`);

    if (!res.ok) {
      throw new Error(`Couldn't fetch ${url} , Recived ${res.status}`)
    }

    return await res.json();
  }

  async getImage(id) {
    const res = await fetch(`${this._apiImage}/assets/img/planets/${id}.jpg`);

    // if (!res.ok) {
    //   throw new Error(`Couldn't fetch an image, Recived ${res.status}`)
    // }

    return await res;
  }

  async getAllPeople() {
    const res = await this.getResource(`/people/`);
    return res.results.map(this._transformPerson);
  }

  async getPerson(id) {
    const person = await this.getResource(`/people/${id}/`);
    return this._transformPerson(person);
  }

  async getAllPlanets() {
    const res = await this.getResource(`/planets/`);
    return res.results.map(this._transformPlanet);
  }

  async getPlanet(id) {
    const planetPlaceholderUrl = 'https://starwars-visualguide.com/assets/img/big-placeholder.jpg';

    const planet = await this.getResource(`/planets/${id}/`);
    const planetImage = await this.getImage(this._extractId(planet));
    const planetImageUrl = planetImage.ok === true ? planetImage.url : planetPlaceholderUrl;
    const planetObj = { ...planet, planetImageUrl };

    return this._transformPlanet(planetObj);
  }

  async getAllStarships() {
    const res = await this.getResource(`/starships/`);
    return res.results.map(this._transformStarship);
  }

  async getStarship(id) {
    const startship = this.getResource(`/starships/${id}/`);
    return this._transformStarship(startship);
  }

  _extractId(item) {
    const idRegExp = /\/([0-9]*)\/$/;
    return item.url.match(idRegExp)[1];
  }

  _transformPlanet = (planet) => {
    return {
      id: this._extractId(planet),
      name: planet.name,
      population: planet.population,
      rotationPeriod: planet.rotation_period,
      diameter: planet.diameter,
      imageUrl: planet.planetImageUrl
    }
  }

  _transformStarship = (starship) => {
    return {
      id: this._extractId(starship),
      name: starship.name,
      model: starship.model,
      manufacturer: starship.manufacturer,
      costInCredits: starship.cost_in_credits,
      length: starship.length,
      crew: starship.crew,
      passengers: starship.passengers,
      cargoCapacity: starship.cargo_capacity
    }
  }

  _transformPerson = (person) => {
    return {
      id: this._extractId(person),
      name: person.name,
      gender: person.gender,
      birthYear: person.birth_year,
      eyeColor: person.eye_color
    }
  }
}