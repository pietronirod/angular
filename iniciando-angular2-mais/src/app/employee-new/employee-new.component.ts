import { Component, OnInit } from '@angular/core';
import { employees } from '../employee'

@Component({
  selector: 'employee-new',
  templateUrl: './employee-new.component.html',
  styleUrls: ['./employee-new.component.css']
})
export class EmployeeNewComponent implements OnInit {
  name: string = ''
  salary: number = 0
  employees = employees

  constructor() { }

  ngOnInit(): void {  }

  addEmployee(event: MouseEvent): void {
    console.log(event)
    this.employees.push({name: this.name, salary: this.salary})
    console.log(this.employees)
  }

}
