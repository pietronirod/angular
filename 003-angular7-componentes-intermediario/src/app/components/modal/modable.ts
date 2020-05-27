import { ViewChild, Output, EventEmitter, OnInit } from "@angular/core";
import { ModalComponent } from "./modal.component";

export class Modable implements OnInit {
  @ViewChild(ModalComponent)
  modalComponent: ModalComponent
  @Output()
  onHide: EventEmitter<any> = new EventEmitter()
  @Output()
  onShow: EventEmitter<any> = new EventEmitter()

  ngOnInit() {
    this.modalComponent.onHide.subscribe(event => {
      this.onHide.emit(event)
    })
    this.modalComponent.onShow.subscribe(event => {
      this.onShow.emit(event)
    })
  }
  hide() {
    this.modalComponent.hide()
  }

  show() {
    this.modalComponent.show()
  }
}
