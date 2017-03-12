import { Injectable, EventEmitter } from '@angular/core';
import { Debugger } from "../../game-engine/debugger";

@Injectable()
export class CanvasFormsObserverService {

  private static instance : CanvasFormsObserverService;

  private formControlEventEmitter : EventEmitter<any>;

  private constructor() {

    this.formControlEventEmitter = new EventEmitter<any>();
  }

  public static getInstance() {

    if ( null == CanvasFormsObserverService.instance ) {

        CanvasFormsObserverService.instance = new CanvasFormsObserverService();
    }

    return CanvasFormsObserverService.instance;
  }

  public getFormControlEventEmitter() {

    return this.formControlEventEmitter;
  }

  public triggerEventSignal( event ) {

      Debugger.log( 'emitting event' );
      this.formControlEventEmitter.emit( event );
  }


}
