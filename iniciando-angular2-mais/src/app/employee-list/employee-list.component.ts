import { Component, OnInit } from '@angular/core';
import { employees } from '../employee'

@Component({
  selector: 'employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employees_ = employees

  constructor() { }

  ngOnInit(): void {
  }

  setSalaryColor(salary:number): string {
    return salary > 2000? 'green': null
  }

  setSalaryClass(salary: number): string {
    let ret: string = null

    if (salary > 2000) {
      ret = 'salary-expensive'
    } else if (salary < 1000) {
      ret = 'salary-cheap'
    }
    return ret
  }
}
