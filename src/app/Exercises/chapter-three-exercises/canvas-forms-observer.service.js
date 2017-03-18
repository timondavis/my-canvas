"use strict";
var core_1 = require('@angular/core');
var debugger_1 = require("../../game-engine/debugger");
var thisWindow = window;
/**
 * Responsible for handling communications between the Game Environment and forms on the DOM
 *
 * Singleton class
 */
var CanvasFormsObserverService = (function () {
    function CanvasFormsObserverService() {
        this.formControlEventEmitter = new core_1.EventEmitter();
    }
    /**
     * Get the single instance of the Observer
     * @returns {CanvasFormsObserverService}
     */
    CanvasFormsObserverService.getInstance = function () {
        if (null == CanvasFormsObserverService.instance) {
            CanvasFormsObserverService.instance = new CanvasFormsObserverService();
        }
        return CanvasFormsObserverService.instance;
    };
    /**
     * Get the form control event emitter.  Triggered on change of any element in an attached form.
     *
     * @returns {EventEmitter<any>}
     */
    CanvasFormsObserverService.prototype.getFormControlEventEmitter = function () {
        return this.formControlEventEmitter;
    };
    /**
     * For use by components - signals to the observer that a control has been updated.
     *
     * @param id : String  The ID of the signaling component
     * @param value : any  The value of the triggering control
     */
    CanvasFormsObserverService.prototype.triggerEventSignal = function (id, value) {
        debugger_1.Debugger.log('emitting event');
        var eventSignal = { 'id': id, 'value': value };
        this.formControlEventEmitter.emit(eventSignal);
    };
    return CanvasFormsObserverService;
}());
exports.CanvasFormsObserverService = CanvasFormsObserverService;
