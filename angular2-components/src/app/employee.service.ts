import { Injectable } from '@angular/core';
import { Employee, Employees } from './employee'
import employees from './employees';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  employees: Employees = [
    {name: "Fulano", salary: 1000, bonus: 0}
  ]

  constructor() { }

  addEmployee(employee: Employee): void {
    employee.bonus = employee.salary >= 1000? 0: employee.bonus
    this.employees.push(employee)
  }

  deleteEmployee(employee: Employee): void {
    const ind = this.employees.indexOf(employee)
    this.employees.splice(ind, 1)
  }
}
