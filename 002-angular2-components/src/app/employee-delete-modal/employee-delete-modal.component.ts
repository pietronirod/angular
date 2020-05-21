import { Component, OnInit, ElementRef, EventEmitter, Input, Output } from '@angular/core';
import { EmployeeService } from '../employee.service'
import { Employee } from '../employee';

declare const $
@Component({
  selector: 'employee-delete-modal',
  templateUrl: './employee-delete-modal.component.html',
  styleUrls: ['./employee-delete-modal.component.css']
})
export class EmployeeDeleteModalComponent implements OnInit {

  @Input()
  employee: Employee

  @Output()
  onDelete: EventEmitter<Employee> = new EventEmitter<Employee>()

  constructor(private element: ElementRef, private employeeService: EmployeeService) { }

  ngOnInit(): void {
  }

  deleteEmployee(): void {
    const copy = Object.assign({}, this.employee)
    this.employeeService.deleteEmployee(this.employee)
    this.onDelete.emit(copy)
    this.hide()
  }

  show(){
    const divModal = this.getDivModal()
    $(divModal).modal('show')
  }
  private hide() {
    $(this.getDivModal()).modal('hide')
  }
  private getDivModal(): HTMLElement {
    const nativeElement: HTMLElement = this.element.nativeElement
    return nativeElement.firstChild as HTMLElement
  }

}
