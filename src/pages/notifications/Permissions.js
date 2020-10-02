import React, { useEffect } from 'react';
import { Table } from 'reactstrap';
import store from '../../store';
import { GetRequest } from '../../actions/Request';

const Requests = () => {
  const requests = request.map((req) => {
    <tr key={request._id}>
      <td>{request.name}</td>
      <td>{request.title}</td>
      <td>{request.name}</td>
      <td>
        <button>Approve</button>
      </td>
    </tr>;
  });

  return (
    <Table>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>{requests}</tbody>
    </Table>
  );
};

export default Requests;
