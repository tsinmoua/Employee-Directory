import React from "react";
import SortButtons from "./SortButtons"

function Table(props) {
  return (
    <table className="table table-hover">
      <thead>
        <tr>
          <th scope="col">Image</th>
          <th scope="col">First Name<SortButtons onClick={props.handleSort} /></th>
          <th scope="col">Last Name<SortButtons onClick={props.handleSort} /></th>
          <th scope="col">Phone #</th>
          <th scope="col">Email Address</th>
          <th scope="col">DOB</th>
        </tr>
      </thead>
      <tbody>
        {
          props.employees.map((employee, index) => {
            let date = new Date(employee.dob.date);
            let newDate = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`
            return (
              <tr key={index}>
                <td><img src={employee.picture.medium} alt="Employee"></img></td>
                <td>{employee.name.first}</td>
                <td>{employee.name.last}</td>
                <td>{employee.phone}</td>
                <td>{employee.email}</td>
                <td>{newDate}</td>
              </tr>)
          })
        }
      </tbody>
    </table>
  );
}

export default Table;
