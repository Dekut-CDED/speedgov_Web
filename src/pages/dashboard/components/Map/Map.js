import React, { Component, useEffect, useState } from 'react';
import { Map, GeoJSON, TileLayer, Circle, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './map.css';

const MyMap = ({ violocation }) => {
  const state = { color: '#ffff00' };
  const center = [-0.397665, 36.961123];
  const rad = 900;
  const countryStyle = {};
  console.log(violocation);
  return (
    <div>
      <Map
        style={{ height: '700px', width: '900px' }}
        zoom={16}
        center={center}
      >
        <GeoJSON
          style={countryStyle}
          //data={mapData.features}
          //onEachFeature={this.onEachCountry}
        />
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Circle center={center} fillColor="red" radius={rad}>
          <Popup>GeoFence Around the School</Popup>
        </Circle>
      </Map>
    </div>
  );
};

export default MyMap;
