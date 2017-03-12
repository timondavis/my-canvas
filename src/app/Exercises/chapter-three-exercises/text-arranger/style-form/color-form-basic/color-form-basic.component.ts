import { Component, OnInit } from '@angular/core';
import { CanvasFormsObserverService } from "../../../canvas-forms-observer.service";

@Component({
  selector: 'app-color-form-basic',
  templateUrl: './color-form-basic.component.html',
  styleUrls: ['./color-form-basic.component.css']
})
export class ColorFormBasicComponent implements OnInit {

  constructor() { }

  /**
   * Send an event signal to the canvas form observer
   */
  public updateForm() {

    CanvasFormsObserverService.getInstance().triggerEventSignal( event );
  }

  ngOnInit() {
  }

}
