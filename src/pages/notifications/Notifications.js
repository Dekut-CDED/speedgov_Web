import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import Requests from './Request';
import { GetRequest } from '../../actions/Request';
import Spinner from '../spinner/spinner';

const Notifications = ({ GetRequest, request: { requests } }) => {
  useEffect(() => {
    GetRequest();
    console.log(requests);
  }, []);

  return requests === null ? (
    <Spinner />
  ) : (
    <Fragment>
      <Requests requests={requests} />
    </Fragment>
  );
};

Notifications.propTypes = {
  GetRequest: PropTypes.func.isRequired,
  requests: PropTypes.object.isRequired,
};

Notifications.propTypes = {
  request: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  request: state.request,
});

export default connect(mapStateToProps, { GetRequest })(Notifications);
