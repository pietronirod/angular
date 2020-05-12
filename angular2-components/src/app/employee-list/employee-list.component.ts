import { Component, OnInit, ViewChild } from '@angular/core';
import { EmployeeService } from '../employee.service'
import { EmployeeNewModalComponent } from '../employee-new-modal/employee-new-modal.component';
import { EmployeeEditComponent } from '../employee-edit/employee-edit.component'
import { EmployeeDeleteModalComponent } from '../employee-delete-modal/employee-delete-modal.component'

import { Employee } from '../employee';
import employees from '../employees';

@Component({
  selector: 'employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employee: Employee
  employeeToEdit: Employee
  employeeToDelete: Employee
  showMessageSuccess = false


  @ViewChild(EmployeeNewModalComponent)
  employeeNewModal: EmployeeNewModalComponent

  @ViewChild(EmployeeEditComponent)
  employeeEdit: EmployeeEditComponent

  @ViewChild(EmployeeDeleteModalComponent)
  employeeDeleteModal: EmployeeDeleteModalComponent

  constructor(public employeeService: EmployeeService) {}

  ngOnInit(): void {
  }

  openNewModal() {
    this.employeeNewModal.show()
  }

  openEditModal(employee: Employee){
    this.employeeToEdit = employee
    this.employeeEdit.show()
  }

  openDeleteModal(employee: Employee){
    this.employeeToDelete = employee
    this.employeeDeleteModal.show()
  }

  onNewEmployee(employee: Employee) {
    this.employee = employee
    this.showMessageSuccess = true
  }

  onEditEmployee(employee: Employee) {
    console.log(employee)
  }

  onDeleteEmployee(employee: Employee) {
    console.log(employee)
  }
}
