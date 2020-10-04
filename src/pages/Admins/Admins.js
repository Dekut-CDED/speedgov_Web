import React, { useEffect } from 'react';

const Request = ({ admin }) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'js/table.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const admins = admin.map((admin) => (
    <tr key={admin._id}>
      <td>{admin.email}</td>
      <td>{admin.role}</td>
      <td>{admin.createdon}</td>
      <td>{admin.status}</td>
      <td>{admin.lastlogin}</td>
      <td>
        <button className="btn btn-danger" color="danger">
          Delete Admin
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
                id="adminTable"
                className="table table-bordered table-striped"
              >
                <thead>
                  <tr>
                    <th>Email</th>
                    <th>Role</th>
                    <th>Createdon</th>
                    <th>Status</th>
                    <th>LastLogin</th>
                    <th />
                  </tr>
                </thead>
                <tbody>{admins}</tbody>
                <tfoot>
                  <tr>
                    <th>Email</th>
                    <th>Role</th>
                    <th>Createdon</th>
                    <th>Status</th>
                    <th>LastLogin</th>
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
