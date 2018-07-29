import React, { Component } from 'react';
import './App.css';
import { PlacesWithStandaloneSearchBox } from './SearchBox';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
    this.onPlacesChanged = this.onPlacesChanged.bind(this);
  }


  render() {
    return (
    <React.Fragment>
      <PlacesWithStandaloneSearchBox placesChanged={this.onPlacesChanged} />
      <PlacesWithStandaloneSearchBox placesChanged={this.onPlacesChanged} />
    </React.Fragment>
    );
  }

  onPlacesChanged(places) {
    console.log(places[0].formatted_address);
  }

}

export default App;
