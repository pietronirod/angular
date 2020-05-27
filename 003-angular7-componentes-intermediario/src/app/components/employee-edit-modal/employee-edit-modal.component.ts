import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  Input,
  ViewChild
} from '@angular/core';
import {
  Employee
} from '../../services/employee.service';
import {
  ModalComponent
} from '../modal/modal.component';
import { Modable } from '../modal/modable';

declare const $;

@Component({
  selector: 'employee-edit-modal',
  templateUrl: './employee-edit-modal.component.html',
  styleUrls: ['./employee-edit-modal.component.css']
})
export class EmployeeEditModalComponent extends Modable implements OnInit {

  @Input()
  employee: Employee;

  @Output()
  onSubmit: EventEmitter < Employee > = new EventEmitter < Employee > ();

  constructor() {
    super()
  }

  ngOnInit() {
    super.ngOnInit()
  }

  addEmployee(event) {
    const copy = Object.assign({}, this.employee);
    this.onSubmit.emit(copy);
    this.hide();
  }
}
