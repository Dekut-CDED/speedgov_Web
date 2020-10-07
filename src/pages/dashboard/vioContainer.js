import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import Violation from './vio';
import { GetAllLocationViolation } from '../../actions/Location';
import Spinner from '../spinner/spinner';

const ViolationsContainer = ({ GetAllLocationViolation, locations }) => {
  useEffect(() => {
    GetAllLocationViolation();
  }, []);

  return locations === null ? (
    <Spinner />
  ) : (
    <Fragment>
      <Violation violation={locations} />
    </Fragment>
  );
};

ViolationsContainer.propTypes = {
  GetAllLocationViolation: PropTypes.func.isRequired,
  locations: PropTypes.array,
};

const mapStateToProps = (state) => ({
  locations: state.location.locations,
});

export default connect(mapStateToProps, { GetAllLocationViolation })(
  ViolationsContainer
);
