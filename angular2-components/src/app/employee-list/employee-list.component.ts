import { Component, OnInit, ViewChild } from '@angular/core';
import { EmployeeService } from '../employee.service'
import { EmployeeNewModalComponent } from '../employee-new-modal/employee-new-modal.component';
import { Employee } from '../employee';

@Component({
  selector: 'employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employee: Employee
  showMessageSuccess = false


  @ViewChild(EmployeeNewModalComponent)
  employeeNewModal: EmployeeNewModalComponent

  constructor(public employeeService: EmployeeService) {}

  ngOnInit(): void {
  }

  openNewModal() {
    this.employeeNewModal.show()
  }

  onNewEmployee(employee: Employee) {
    this.employee = employee
    this.showMessageSuccess = true
  }
}
