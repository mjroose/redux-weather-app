import React, {Component} from 'react';

const API_KEY = 'AIzaSyBkEfv1zN7Cn6fjdv01aTXpyGnYpMpiJ_8';

class GoogleMap extends Component {
  componentDidMount() {
    new google.maps.Map(this.refs.map, {
      zoom: 12,
      center: {
        lat: this.props.lat,
        lng: this.props.lon
      }
    });
  }

  render() {
    return <div ref="map" />;
  }
}

export default GoogleMap;