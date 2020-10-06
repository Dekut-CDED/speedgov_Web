import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import Admins from './Admins';
import { GetAllAdmins } from '../../actions/Admins';
import Spinner from '../spinner/spinner';

const AdminContainer = ({ GetAllAdmins, admins }) => {
  useEffect(() => {
    GetAllAdmins();
  }, []);

  return admins === null ? (
    <Spinner />
  ) : (
    <Fragment>
      <Admins admin={admins} />
    </Fragment>
  );
};

AdminContainer.propTypes = {
  GetAllAdmins: PropTypes.func.isRequired,
  admins: PropTypes.array,
};

const mapStateToProps = (state) => ({
  admins: state.admins.admins,
});

export default connect(mapStateToProps, { GetAllAdmins })(AdminContainer);
