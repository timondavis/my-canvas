"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var debugger_1 = require("../../../../game-engine/debugger");
var canvas_forms_observer_service_1 = require("../../canvas-forms-observer.service");
var angular2_color_picker_1 = require("angular2-color-picker");
var TextArrangerFormComponent = (function () {
    function TextArrangerFormComponent() {
        this.color = '#000000';
        this.colorMode = "basic";
        this.textArrangerFormUpdate = new core_1.EventEmitter();
    }
    TextArrangerFormComponent.prototype.updateColorField = function (id, value) {
        canvas_forms_observer_service_1.CanvasFormsObserverService.getInstance().triggerEventSignal(id, value);
    };
    TextArrangerFormComponent.prototype.updateForm = function (event) {
        debugger_1.Debugger.log(event);
        canvas_forms_observer_service_1.CanvasFormsObserverService.getInstance().triggerEventSignal(event.target.id, event.target.value);
        if ('fillType' == event.target.id) {
            this.colorMode = event.target.value;
        }
    };
    TextArrangerFormComponent = __decorate([
        core_1.Component({
            selector: 'app-text-arranger-form',
            templateUrl: './text-arranger-form.component.html',
            styleUrls: ['./text-arranger-form.component.css'],
        }),
        core_1.NgModule({ imports: [angular2_color_picker_1.ColorPickerModule] })
    ], TextArrangerFormComponent);
    return TextArrangerFormComponent;
}());
exports.TextArrangerFormComponent = TextArrangerFormComponent;
