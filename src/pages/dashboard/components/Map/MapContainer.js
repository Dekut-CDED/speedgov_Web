import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import Map from './Map';
import { GetSpecificStudentViolations } from '../../../../actions/Location';

const MovementsMap = ({ GetSpecificStudentViolations, studentvios }) => {
  useEffect(() => {}, []);

  return (
    <Fragment>
      <Map violocation={studentvios} />
    </Fragment>
  );
};

MovementsMap.propTypes = {
  GetSpecificStudentViolations: PropTypes.func.isRequired,
  locations: PropTypes.array,
};

const mapStateToProps = (state) => ({
  studentvios: state.location.studentvios,
});

export default connect(mapStateToProps, { GetSpecificStudentViolations })(
  MovementsMap
);
