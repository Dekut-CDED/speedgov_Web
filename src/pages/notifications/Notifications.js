import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import Requests from './Request';
import { GetAnauthorizedRequests } from '../../actions/Request';
import Spinner from '../spinner/spinner';

const Notifications = ({ GetAnauthorizedRequests, request: { requests } }) => {
  useEffect(() => {
    GetAnauthorizedRequests();
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
  GetAnauthorizedRequests: PropTypes.func.isRequired,
  requests: PropTypes.object.isRequired,
};

Notifications.propTypes = {
  request: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  request: state.request,
});

export default connect(mapStateToProps, { GetAnauthorizedRequests })(
  Notifications
);
