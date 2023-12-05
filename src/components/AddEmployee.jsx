import React, { Component } from "react";
import { useNavigate } from "react-router-dom";
import EmployeeServices from "../Services/EmployeeServices";

export default class AddEmployee extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      emailId: "",
    };

    this.changeFirstName = this.changeFirstName.bind(this);
    this.changeLastName = this.changeLastName.bind(this);
    this.changeEmailId = this.changeEmailId.bind(this);
    this.saveEmployee = this.saveEmployee.bind(this);
  }

  saveEmployee = (e) => {
    e.preventDefault();
    let employee = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      emailId: this.state.emailId,
    };

    EmployeeServices.createEmployee(employee).then((res) => {
      this.props.history.push("/employees");
    });
  };

  changeFirstName(event) {
    this.setState({ firstName: event.target.value });
  }

  changeLastName(event) {
    this.setState({ lastName: event.target.value });
  }

  changeEmailId(event) {
    this.setState({ emailId: event.target.value });
  }

  cancel() {
    this.props.history.push("/employees");
  }

  render() {
    return (
      <div>
        <div className="container mt-3">
          <div className="row">
            <div className="card col-md-6 offset-md-3 offset-md-3">
              <h3 className="text-center">Add Employee</h3>
              <div className="card-body">
                <form>
                  <div className="form-group mt-3">
                    <label>First Name</label>
                    <input
                      className="form-control"
                      placeholder="First Name"
                      name="firstname"
                      value={this.state.firstName}
                      onChange={this.changeFirstName}
                    />
                  </div>
                  <div className="form-group mt-3">
                    <label>Last Name</label>
                    <input
                      className="form-control"
                      placeholder="Last Name"
                      name="lastname"
                      value={this.state.lastName}
                      onChange={this.changeLastName}
                    />
                  </div>
                  <div className="form-group mt-3">
                    <label>Email Address</label>
                    <input
                      className="form-control"
                      placeholder="Email Address"
                      name="email"
                      value={this.state.emailId}
                      onChange={this.changeEmailId}
                    />
                  </div>

                  <button
                    className="btn btn-success mt-3"
                    onClick={this.saveEmployee}
                  >
                    Save
                  </button>
                  <button
                    className="btn btn-danger mt-3"
                    onClick={this.cancel.bind(this)}
                    style={{ marginLeft: "10px" }}
                  >
                    Cancel
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
