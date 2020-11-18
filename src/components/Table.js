import React from "react";

function Table(props) {
  return (
    <table class="table table-hover">
      <thead>
        <tr>
          <th scope="col">Image</th>
          <th scope="col">First Name</th>
          <th scope="col">Last Name</th>
          <th scope="col">Phone #</th>
          <th scope="col">Email Address</th>
          <th scope="col">DOB</th>
        </tr>
      </thead>
      <tbody>
        {props.employees.map(employee => (
          <tr>
            <td>{employee.picture.medium}</td>
            <td>{employee.name.first}</td>
            <td>{employee.name.last}</td>
            <td>{employee.phone}</td>
            <td>{employee.email}</td>
            <td>{employee.dob}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
