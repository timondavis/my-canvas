import { Injectable, Output, EventEmitter } from '@angular/core';
import { Debugger } from "../debugger";

@Injectable()
export class InputControllerService {

  @Output() windowClicked : EventEmitter<any>;

  constructor() {

      this.windowClicked = new EventEmitter<any>();
  }

  public registerWindowClick( e ) {

      Debugger.log( "Event Emitter Hit" );
      this.windowClicked.emit( e );
  }
}
