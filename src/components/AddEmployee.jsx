import React, { Component } from "react";

export default class AddEmployee extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      emailId: "",
    };
  }

  changeFirstName(event) {
    this.setState({ firstName: event.target.value });
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="card col-md-6 offset-md-3 offset-md-3">
              <h3 className="text-center">Add Employee</h3>
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <label>First Name</label>
                    <input
                      type="text"
                      placeholder="First Name"
                      name="firstname"
                      className="form-control"
                      value={this.state.firstName}
                      onChange={this.changeFirstName}
                    />
                  </div>
                  <div className="form-group">
                    <label>Last Name</label>
                    <input
                      type="text"
                      placeholder="Last Name"
                      name="lastname"
                      className="form-control"
                      value={this.state.lastName}
                      onChange={this.changeLastName}
                    />
                  </div>
                  <div className="form-group">
                    <label>Email ID</label>
                    <input
                      type="email"
                      placeholder="Email ID"
                      name="email"
                      className="form-control"
                      value={this.state.emailId}
                      onChange={this.changeEmailId}
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
