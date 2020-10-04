import React, { useEffect } from 'react';

const Students = ({ student }) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'js/table.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const admins = student.map((stud) => (
    <tr key={stud._id}>
      <td>{stud.name}</td>
      <td>{stud.registrationNumber}</td>
      <td>{stud.createdAt}</td>
      <td>{stud.phoneNumber}</td>
      <td>{stud.residence.name}</td>
      <td>{stud.residence.roomNumber}</td>
    </tr>
  ));

  return (
    <section className="content">
      <div className="row">
        <div className="col-12">
          {/* /.card */}
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Students Registered</h3>
            </div>
            {/* /.card-header */}
            <div className="card-body">
              <table
                id="studentTable"
                className="table table-bordered table-striped"
              >
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Req Number</th>
                    <th>Created On</th>
                    <th>Phone Number</th>
                    <th>Residence</th>
                    <th>RoomNumber</th>
                  </tr>
                </thead>
                <tbody>{admins}</tbody>
                <tfoot>
                  <tr>
                    <th>Name</th>
                    <th>Req Number</th>
                    <th>Created On</th>
                    <th>Phone Number</th>
                    <th>Residence</th>
                    <th>RoomNumber</th>
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

export default Students;
