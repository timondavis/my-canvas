import { EventEmitter } from '@angular/core';
import { Debugger } from "../../game-engine/debugger";

let thisWindow = window;

/**
 * Responsible for handling communications between the Game Environment and forms on the DOM
 *
 * Singleton class
 */
export class CanvasFormsObserverService {

  // The actual instance of the class
  private static instance : CanvasFormsObserverService;

  // Event emitter for transmitting  form control events
  private formControlEventEmitter : EventEmitter<any>;

  private constructor() {

        this.formControlEventEmitter = new EventEmitter<any>();
  }

  /**
   * Get the single instance of the Observer
   * @returns {CanvasFormsObserverService}
   */
  public static getInstance() {

    if ( null == CanvasFormsObserverService.instance ) {

        CanvasFormsObserverService.instance = new CanvasFormsObserverService();
    }

    return CanvasFormsObserverService.instance;
  }

  /**
   * Get the form control event emitter.  Triggered on change of any element in an attached form.
   *
   * @returns {EventEmitter<any>}
   */
  public getFormControlEventEmitter() {

    return this.formControlEventEmitter;
  }

  /**
   * For use by components - signals to the observer that a control has been updated.
   * @param event
   */
  public triggerEventSignal( event ) {

      Debugger.log( 'emitting event' );
      this.formControlEventEmitter.emit( event );
  }
}
