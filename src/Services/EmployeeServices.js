import axios from "axios";

const EMPLOYEE_API_BEST_URL = "http://localhost:8080/api/v1/employees";

class EmployeeService {
  getEmployees() {
    return axios.get(EMPLOYEE_API_BEST_URL);
  }

  createEmployee(employee) {
    return axios.post(EMPLOYEE_API_BEST_URL, employee);
  }
}

export default new EmployeeService();
