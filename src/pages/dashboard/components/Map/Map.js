import React, { Component, useEffect, useState } from 'react';
import L from 'leaflet';
import { Map, TileLayer, Circle, Popup, Marker } from 'react-leaflet';

import 'leaflet/dist/leaflet.css';
import './map.css';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});
L.Marker.prototype.options.icon = DefaultIcon;

const MyMap = ({ violocation }) => {
  const [violation, setViolation] = useState(violocation);
  const state = { color: '#ffff00' };
  const center = [-0.397665, 36.961123];
  const rad = 900;

  useEffect(() => {
    let vio = [];
    if (violocation) {
      violocation.map((doc) => {
        let viola = doc;
        vio.push(viola);
      });
      setViolation((state) => ({ ...state, vio }));
    }
    console.log(vio);
  }, [violocation]);

  const markers = (violocation) => {
    if (violocation) {
      violocation.map((marker) => {
        console.log(marker.lat, marker.long);
      });
    }
  };

  return (
    <div>
      <Map
        style={{ height: '700px', width: '1000px' }}
        zoom={16}
        center={center}
      >
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Circle center={center} fillColor="red" radius={rad}>
          <Popup>GeoFence Around the School</Popup>
        </Circle>

        {violation !== null ? (
          violocation.map((doc) => (
            <Marker key={doc._id} position={[doc.lat, doc.long]}>
              <h1>{doc.lat}</h1>
              <Popup>
                <h3>{doc.LocationName}</h3>
                <br />
                <h4>{doc.Time}</h4>
                Easily customizable.
              </Popup>
            </Marker>
          ))
        ) : (
          <Marker position={center}></Marker>
        )}
      </Map>
    </div>
  );
};

export default MyMap;
