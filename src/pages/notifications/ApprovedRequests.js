import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import Requests from './AprovedRequst';
import { GetApprovedRequests } from '../../actions/Request';
import Spinner from '../spinner/spinner';

const ApprovedRequests = ({ GetApprovedRequests, request: { requests } }) => {
  useEffect(() => {
    GetApprovedRequests();
  }, []);

  return requests === null ? (
    <Spinner />
  ) : (
    <Fragment>
      <Requests requests={requests} />
    </Fragment>
  );
};

ApprovedRequests.propTypes = {
  GetAnauthorizedRequests: PropTypes.func.isRequired,
  requests: PropTypes.object.isRequired,
};

ApprovedRequests.propTypes = {
  request: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  request: state.request,
});

export default connect(mapStateToProps, { GetApprovedRequests })(
  ApprovedRequests
);
