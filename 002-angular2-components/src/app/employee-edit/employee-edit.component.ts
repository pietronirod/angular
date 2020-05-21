import { Component, OnInit, EventEmitter, ElementRef, Output, Input } from '@angular/core';
import { Employee } from '../employee'

declare const $

@Component({
  selector: 'employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css']
})
export class EmployeeEditComponent implements OnInit {
  @Input()
  employee: Employee

  @Output()
  onSubmit: EventEmitter<Employee> = new EventEmitter<Employee>()

  constructor(private element: ElementRef) { }

  ngOnInit(): void {
  }

  show(){
    const divModal = this.getDivModal()

    $(divModal).modal('show')
  }

  editEmployee(event: MouseEvent): void {
    const copy = Object.assign({}, this.employee)
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
