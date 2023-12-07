import React, { Component } from "react";
import EmployeeServices from "../Services/EmployeeServices";

class ListEmployee extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: [],
    };
    this.addEmployee = this.addEmployee.bind(this);
    this.editEmployee = this.editEmployee.bind(this);
    this.deleteEmployee = this.deleteEmployee.bind(this);
  }

  editEmployee(id) {
    this.props.history.push(`/add-employee/${id}`);
  }

  deleteEmployee(id) {
    EmployeeServices.deleteEmployee(id).then((res) => {
      this.setState({
        employees: this.state.employees.filter(
          (employee) => employee.id !== id
        ),
      });
    });
  }

  viewEmployee(id) {
    this.props.history.push(`/view-employee/${id}`);
  }

  componentDidMount() {
    EmployeeServices.getEmployees().then((res) => {
      this.setState({ employees: res.data });
    });
  }

  // add new employee
  addEmployee() {
    this.props.history.push("/add-employee/_add");
  }

  render() {
    return (
      <div>
        <h2 className="text-center">Employee List</h2>
        <div className="mb-3">
          <button className="btn btn-success" onClick={this.addEmployee}>
            Add Employee
          </button>
        </div>
        <div className="row">
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th> Employee First Name</th>
                <th> Employee Last Name</th>
                <th> Employee Email ID</th>
                <th> Actions</th>
              </tr>
            </thead>

            <tbody>
              {this.state.employees.map((employee) => (
                <tr key={employee.id}>
                  <td>{employee.firstName}</td>
                  <td>{employee.lastName}</td>
                  <td>{employee.emailID}</td>
                  <td>
                    <button
                      className="btn btn-info"
                      onClick={() => this.editEmployee(employee.id)}
                    >
                      Update
                    </button>
                    <button
                      style={{ marginLeft: "10px" }}
                      className="btn btn-danger"
                      onClick={() => this.deleteEmployee(employee.id)}
                    >
                      Delete
                    </button>
                    <button
                      style={{ marginLeft: "10px" }}
                      className="btn btn-info"
                      onClick={() => this.viewEmployee(employee.id)}
                    >
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default ListEmployee;
