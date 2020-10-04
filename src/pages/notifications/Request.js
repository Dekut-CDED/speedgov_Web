import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { GetRequest } from '../../actions/Request';
import store from '../../store';

const Request = ({ requests }) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'js/table.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const studentsRequest = requests.map((req) => (
    <tr key={req._id}>
      <td>{req.user.name}</td>
      <td>{req.user.registrationNumber}</td>
      <td>{req.requestName}</td>
      <td>{req.locationName}</td>
      <td>
        <button className="btn btn-success"> Approve Request</button>
      </td>

      <td>
        <button className="btn btn-danger"> Decline Permission</button>
      </td>
    </tr>
  ));

  //  const  studentsRequests =()=>  {

  // componentDidUpdate() {
  //   const { name, locationName } = this.props.requests.requests;
  //   console.log(name, locationName);

  //   this.props.requests.requests.map((element) => {
  //     console.log(element._id);
  //   });
  // }

  return (
    <section className="content">
      <div className="row">
        <div className="col-12">
          {/* /.card */}
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Request Requested</h3>
            </div>
            {/* /.card-header */}
            <div className="card-body">
              <table
                id="requestTable"
                className="table table-bordered table-striped"
              >
                <thead>
                  <tr>
                    <th>Student Name</th>
                    <th>Req No.</th>
                    <th>Request Name</th>
                    <th>Location Name</th>
                    <th />
                    <th />
                  </tr>
                </thead>
                <tbody>{studentsRequest}</tbody>
                <tfoot>
                  <tr>
                    <th>Student Name</th>
                    <th>Req No.</th>
                    <th>Request Name</th>
                    <th>Location Name</th>
                    <th />
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

export default Request;
