import React, { useEffect } from 'react';
import Moment from 'react-moment';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { GetSpecificStudentViolations } from '../../actions/Location';

const Violations = ({ GetSpecificStudentViolations, violation }) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'js/table.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const getAll = (userid) => {
    console.log(userid);
    GetSpecificStudentViolations(userid);
  };

  const violations = violation.map((locations) => (
    <tr key={locations._id} onClick={() => getAll(locations.userId._id)}>
      <td>{locations.userId.name}</td>
      <td>{locations.userId.registrationNumber}</td>
      <td>{locations.userId.email}</td>
      <td>{locations.userId.phoneNumber}</td>
      <td>{locations.LocationName}</td>
      <td>
        <Moment>{locations.Time}</Moment>
      </td>
      <td>
        <button
          className="btn btn-warning"
          onClick={() => getAll(locations.userId._id)}
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
              <h3 className="card-title">Admins Registered</h3>
            </div>
            {/* /.card-header */}
            <div className="card-body">
              <table
                id="violation"
                className="table table-bordered table-striped"
              >
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Reg Number</th>
                    <th>Email</th>
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
                    <th>Reg Number</th>
                    <th>Email</th>
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
  GetSpecificStudentViolations: PropTypes.func.isRequired,
};

export default connect(null, { GetSpecificStudentViolations })(Violations);
