import React, { Fragment, useEffect, useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { Row, Col, Button } from 'reactstrap';
import ReactFlexyTable from 'react-flexy-table';
import 'react-flexy-table/dist/index.css';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import uuid from 'uuid/v4';
import Widget from '../../components/Widget';
import { connect } from 'react-redux';
import MyRequest from './Request';
import setAuthToken from '../../utils/setAuthToken';

const Notifications = ({ requests }) => {
  const [data, setData] = useState([]);
  // Using useEffect to call the API once mounted and set the data
  useEffect(() => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }

    console.log(requests);

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    (async () => {
      const result = await axios('https://api.tvmaze.com/search/shows?q=snow');

      setData(result.data);
    })();
  }, []);

  return (
    <div>
      <h2>Hello edwin</h2>
    </div>
  );
};

Notifications.propTypes = {
  GetRequest: PropTypes.func.isRequired,
  requests: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  requests: state.requests,
});

export default connect(mapStateToProps)(Notifications);
