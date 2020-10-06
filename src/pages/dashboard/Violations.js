import React, { useEffect } from 'react';
import Moment from 'react-moment';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteAdmin } from '../../actions/Admins';

const Violations = ({ deleteAdmin, violation }) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'js/violationTable.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const onButtonClick = (elementid) => {
    deleteAdmin(elementid);
  };
  const violations = violation.map((locations) => (
    <tr key={locations._id} onClick={onButtonClick}>
      <td>{locations.userId.name}</td>
      <td>{locations.userId.email}</td>
      <td>{locations.userId.registrationNumber}</td>
      <td>{locations.userId.phoneNumber}</td>
      <td>{locations.LocationName}</td>
      <td>
        <Moment>{locations.Time}</Moment>
      </td>
      <td>
        <button
          className="btn btn-danger"
          color="danger"
          onClick={(e) => onButtonClick(locations._id)}
        >
          View Movements
        </button>
      </td>
    </tr>
  ));

  return (
    <section className="content">
      <div className="row">
        <div className="col-12">
          {/* /.card */}
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Students ViolationsLocations</h3>
            </div>
            {/* /.card-header */}
            <div className="card-body">
              <table
                id="violationTable"
                className="table table-bordered table-striped hover"
              >
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>RegisteredNumber</th>
                    <th>PhoneNumeber</th>
                    <th>ViolationLocation</th>
                    <th>ViolationTime</th>
                    <th />
                  </tr>
                </thead>
                <tbody>{violations}</tbody>
                <tfoot>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>RegisteredNumber</th>
                    <th>PhoneNumeber</th>
                    <th>ViolationLocation</th>
                    <th>ViolationTime</th>
                    <th />
                  </tr>
                </tfoot>
              </table>
            </div>
            {/* /.card-body */}
          </div>
          {/* /.card */}
        </div>
        {/* /.col */}
      </div>
      {/* /.row */}
    </section>
  );
};

Violations.propTypes = {
  deleteAdmin: PropTypes.func.isRequired,
};

export default connect(null, { deleteAdmin })(Violations);
