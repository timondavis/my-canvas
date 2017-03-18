import { Component, EventEmitter, NgModule } from '@angular/core';
import { Debugger } from "../../../../game-engine/debugger";
import { CanvasFormsObserverService } from "../../canvas-forms-observer.service";
import { ColorPickerModule } from "angular2-color-picker";

@Component({
  selector: 'app-text-arranger-form',
  templateUrl: './text-arranger-form.component.html',
  styleUrls: ['./text-arranger-form.component.css'],
})

@NgModule({ imports : [ ColorPickerModule ] })

export class TextArrangerFormComponent {

  private color: string = '#000000';

  public textArrangerFormUpdate : EventEmitter<Event>;
  public colorMode = "basic";

  constructor() {

    this.textArrangerFormUpdate = new EventEmitter<Event>();
  }

  private updateColorField( id : any, value : String ) {

    CanvasFormsObserverService.getInstance().triggerEventSignal( id, value );
  }

  private updateForm( event ) {

    Debugger.log( event );
    CanvasFormsObserverService.getInstance().triggerEventSignal( event.target.id, event.target.value );

    if ( 'fillType' == event.target.id ) { this.colorMode = event.target.value; }
  }

}
