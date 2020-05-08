import { Injectable } from '@angular/core';
import { Employee, Employees } from './employee'

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  employees: Employees = []

  constructor() { }

  addEmployee(employee: Employee): void {
    employee.bonus = employee.salary >= 1000? 0: employee.bonus
    this.employees.push(employee)
  }
}
