import axios from "axios";

const EMPLOYEE_API_BEST_URL = "http://localhost:8080/api/v1/employees";

class EmployeeService {
  getEmployees() {
    return axios.get(EMPLOYEE_API_BEST_URL);
  }

  createEmployee(employee) {
    return axios.post(EMPLOYEE_API_BEST_URL, employee);
  }

  getEmployeeById(empID) {
    return axios.get(EMPLOYEE_API_BEST_URL + "/" + empID);
  }

  updateEmployee(employee, empID) {
    return axios.put(EMPLOYEE_API_BEST_URL + "/" + empID, employee);
  }

  deleteEmployee(empID) {
    return axios.delete(EMPLOYEE_API_BEST_URL + "/" + empID);
  }
}

export default new EmployeeService();
