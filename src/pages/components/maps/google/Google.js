import React from 'react';
import {
  withGoogleMap,
  withScriptjs,
  GoogleMap,
  Marker,
} from 'react-google-maps';
import Widget from '../../../../components/Widget';

import s from './Google.module.scss';

const BASEURL = 'https://dkutwebapp.azurewebsites.net/api';

const axios = require('axios');

async function getCatFacts() {
  const response = await axios({
    url: BASEURL + '/coordinates/',
    method: 'GET',
    data: {
      user: 'humphry',
      lat: '',
      lng: '',
    },
  });

  console.log(response.data.lng);
  console.log(response.data.lat);
}

const BasicMap = withScriptjs(
  withGoogleMap(() => (
    <GoogleMap
      defaultZoom={14}
      defaultCenter={{
        lat: parseFloat(-0.3977027),
        lng: parseFloat(36.9612051),
      }}
    >
      getCatFacts() axios();
      <Marker position={{ lat: -0.3977027, lng: 36.9612051 }} />
      {/*<Marker position={{ lat: parseFloat(response.data.lat), lng: parseFloat(response.data.lng) }} />
    <Marker position={{ lat: parseFloat(response.data.lat), lng: parseFloat(response.data.lng) }} />
    <Marker position={{ lat: parseFloat(response.data.lat), lng: parseFloat(response.data.lng) }} />*/}
      <Marker position={{ lat: -0.3978, lng: 36.9515 }} />
    </GoogleMap>
  ))
);

class Maps extends React.Component {
  render() {
    return (
      <div>
        <h1 className="page-title">
          <span className="fw-semi-bold"> DEKUT MAP</span>
        </h1>
        <Widget title={<h4>VIOLATORS LOCATION </h4>} collapse close>
          <div className={s.MapContainer}>
            <BasicMap
              googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyB7OXmzfQYua_1LEhRdqsoYzyJOPh9hGLg"
              loadingElement={
                <div style={{ height: 'inherit', width: 'inherit' }} />
              }
              containerElement={<div style={{ height: 'inherit' }} />}
              mapElement={<div style={{ height: 'inherit' }} />}
            />
          </div>
        </Widget>
      </div>
    );
  }
}

export default Maps;
