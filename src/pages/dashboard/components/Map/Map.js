import React, { Component } from 'react';
import { Map, GeoJSON, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './map.css';

class MyMap extends Component {
  state = { color: '#ffff00' };

  colors = ['green', 'blue', 'yellow', 'orange', 'grey'];

  render() {
    return (
      <div>
        <Map style={{ height: '500px' }} zoom={2} center={[20, 100]}>
          <GeoJSON
            style={this.countryStyle}
            //data={mapData.features}
            //onEachFeature={this.onEachCountry}
          />
          <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
        </Map>
      </div>
    );
  }
}

export default MyMap;
