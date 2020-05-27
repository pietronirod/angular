import {
  Component,
  OnInit,
  Input,
  EventEmitter,
  Output
} from '@angular/core';
import {
  Employee,
  EmployeeService
} from '../../services/employee.service';
import {
  ModalComponent
} from '../modal/modal.component';
import { Modable } from '../modal/modable';

declare const $;

@Component({
  selector: 'employee-delete-modal',
  templateUrl: './employee-delete-modal.component.html',
  styleUrls: ['./employee-delete-modal.component.css']
})
export class EmployeeDeleteModalComponent extends Modable implements OnInit {

  @Input()
  employee: Employee;
  @Output()
  onDestroy: EventEmitter<any> = new EventEmitter()

  constructor(private employeeService: EmployeeService) {
    super()
  }

  ngOnInit() {
    super.ngOnInit()
  }

  destroy() {
    const copy = Object.assign({}, this.employee);
    this.employeeService.destroyEmployee(this.employee);
    this.onDestroy.emit(copy);
    this.hide();
  }
}
