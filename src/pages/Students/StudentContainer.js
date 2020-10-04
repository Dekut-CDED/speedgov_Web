import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import Students from './Student';
import { GetAllStudents } from '../../actions/Students';
import Spinner from '../spinner/spinner';

const StudentsContainer = ({ GetAllStudents, students }) => {
  useEffect(() => {
    GetAllStudents();
  }, []);

  return students === null ? (
    <Spinner />
  ) : (
    <Fragment>
      <Students student={students} />
    </Fragment>
  );
};

StudentsContainer.propTypes = {
  GetAllAdmins: PropTypes.func.isRequired,
  admins: PropTypes.object.isRequired,
};

StudentsContainer.propTypes = {
  admins: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  students: state.students.students,
});

export default connect(mapStateToProps, { GetAllStudents })(StudentsContainer);
