import {
  Component,
  OnInit,
  Input,
  EventEmitter,
  Output,
  ViewChild
} from '@angular/core';
import {
  Employee,
  EmployeeService
} from '../../services/employee.service';
import {
  ModalComponent
} from '../modal/modal.component';

declare const $;

@Component({
  selector: 'employee-delete-modal',
  templateUrl: './employee-delete-modal.component.html',
  styleUrls: ['./employee-delete-modal.component.css']
})
export class EmployeeDeleteModalComponent implements OnInit {

  @Input()
  employee: Employee;

  @Output()
  onDestroy: EventEmitter < Employee > = new EventEmitter < Employee > ();

  @ViewChild(ModalComponent)
  modalComponent: ModalComponent

  constructor(private employeeService: EmployeeService) {}

  ngOnInit() {}

  destroy() {
    const copy = Object.assign({}, this.employee);
    this.employeeService.destroyEmployee(this.employee);
    this.onDestroy.emit(copy);
    this.hide();
  }

  hide() {
    this.modalComponent.hide()
  }

  show() {
    this.modalComponent.show()
  }
}
