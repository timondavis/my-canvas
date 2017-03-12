import { Component, EventEmitter } from '@angular/core';
import { Debugger } from "../../../../game-engine/debugger";
import { CanvasFormsObserverService } from "../../canvas-forms-observer.service";
import { ReflectiveInjector } from "@angular/core";

@Component({
  selector: 'app-text-arranger-form',
  templateUrl: './text-arranger-form.component.html',
  styleUrls: ['./text-arranger-form.component.css']
})

export class TextArrangerFormComponent {

  public textArrangerFormUpdate : EventEmitter<Event>;
  public colorMode = "basic";

  constructor() {

    this.textArrangerFormUpdate = new EventEmitter<Event>();
  }

  public updateForm( event : Event ) {

    Debugger.log( "change signal sent" );
    CanvasFormsObserverService.getInstance().triggerEventSignal( event );
  }

}
