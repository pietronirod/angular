import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee'
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'employee-new',
  templateUrl: './employee-new.component.html',
  styleUrls: ['./employee-new.component.css']
})
export class EmployeeNewComponent implements OnInit {

  employee: Employee = {
    name: '',
    salary: 0,
    bonus: 0
  }

 constructor(private employeeService: EmployeeService){}

  ngOnInit(): void {
  }

  addEmployee(event: MouseEvent): void {
    const copy = Object.assign({}, this.employee)
    this.employeeService.addEmployee(copy)
  }

}
