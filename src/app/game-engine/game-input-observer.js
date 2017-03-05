"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var debugger_1 = require("./debugger");
var environment_1 = require("../../environments/environment");
var GameInputObserver = (function () {
    function GameInputObserver() {
        this.mouseClicked = new core_1.EventEmitter();
        this.keyPressed = new core_1.EventEmitter();
        this.mouseEnteredArea = new core_1.EventEmitter();
        this.mouseLeftArea = new core_1.EventEmitter();
        this.keyReleased = new core_1.EventEmitter();
        this.mouseMoved = new core_1.EventEmitter();
    }
    GameInputObserver.prototype.registerMouseClicked = function (e) {
        this.mouseClicked.emit(e);
        if (environment_1.gameEngineConfiguration.showInputLogInDebugger) {
            debugger_1.Debugger.log("Window Clicked");
            debugger_1.Debugger.log(e);
        }
    };
    GameInputObserver.prototype.registerKeyPress = function (e) {
        this.keyPressed.emit(e);
        if (environment_1.gameEngineConfiguration.showInputLogInDebugger) {
            debugger_1.Debugger.log("Key Pressed");
            debugger_1.Debugger.log(e);
        }
    };
    GameInputObserver.prototype.registerMouseEnter = function (e) {
        this.mouseEnteredArea.emit(e);
        if (environment_1.gameEngineConfiguration.showInputLogInDebugger) {
            debugger_1.Debugger.log("Mouse Entered Area");
            debugger_1.Debugger.log(e);
        }
    };
    GameInputObserver.prototype.registerMouseLeave = function (e) {
        this.mouseLeftArea.emit(e);
        if (environment_1.gameEngineConfiguration.showInputLogInDebugger) {
            debugger_1.Debugger.log("Mouse Left Area");
            debugger_1.Debugger.log(e);
        }
    };
    GameInputObserver.prototype.registerKeyRelease = function (e) {
        this.keyReleased.emit(e);
        if (environment_1.gameEngineConfiguration.showInputLogInDebugger) {
            debugger_1.Debugger.log("Released");
            debugger_1.Debugger.log(e);
        }
    };
    GameInputObserver.prototype.registerMouseMove = function (e) {
        this.mouseMoved.emit(e);
        if (environment_1.gameEngineConfiguration.showInputLogInDebugger) {
            debugger_1.Debugger.log("Mouse Moved");
            debugger_1.Debugger.log(e);
        }
    };
    __decorate([
        core_1.Output()
    ], GameInputObserver.prototype, "mouseClicked", void 0);
    __decorate([
        core_1.Output()
    ], GameInputObserver.prototype, "keyPressed", void 0);
    __decorate([
        core_1.Output()
    ], GameInputObserver.prototype, "keyReleased", void 0);
    __decorate([
        core_1.Output()
    ], GameInputObserver.prototype, "mouseEnteredArea", void 0);
    __decorate([
        core_1.Output()
    ], GameInputObserver.prototype, "mouseLeftArea", void 0);
    __decorate([
        core_1.Output()
    ], GameInputObserver.prototype, "mouseMoved", void 0);
    return GameInputObserver;
}());
exports.GameInputObserver = GameInputObserver;
