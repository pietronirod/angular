import { Component, ElementRef, OnInit, Output, EventEmitter } from '@angular/core';
import { Employee } from '../employee'
import { EmployeeService } from '../employee.service';

declare const $

@Component({
  selector: 'employee-new-modal',
  templateUrl: './employee-new-modal.component.html',
  styleUrls: ['./employee-new-modal.component.css']
})
export class EmployeeNewModalComponent implements OnInit {
  employee: Employee = {
    name: '',
    salary: 0,
    bonus: 0
  }

  @Output()
  onSubmit: EventEmitter<Employee> = new EventEmitter<Employee>()

  constructor(private element: ElementRef, private employeeService: EmployeeService) { }

  ngOnInit(): void {
  }

  show(){
    const divModal = this.getDivModal()

    $(divModal).modal('show')
  }

  addEmployee(event: MouseEvent): void {
    const copy = Object.assign({}, this.employee)
    this.employeeService.addEmployee(copy)
    this.onSubmit.emit(copy)
    this.hide()
  }

  private hide(){
    $(this.getDivModal()).modal('hide')
  }

  private getDivModal(): HTMLElement{
    const nativeElement: HTMLElement = this.element.nativeElement
    return nativeElement.firstChild.firstChild as HTMLElement
  }
}
