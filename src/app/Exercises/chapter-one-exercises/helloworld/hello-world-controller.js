"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var game_controller_1 = require("../../../game-engine/game-controller");
var debugger_1 = require("../../../game-engine/debugger");
var HelloWorldController = (function (_super) {
    __extends(HelloWorldController, _super);
    function HelloWorldController() {
        _super.apply(this, arguments);
        this.spaceIsDepressed = false;
    }
    HelloWorldController.prototype.init = function () {
        var _this = this;
        this.context.getInputObserver().keyPressed.subscribe(function (e) { if (e.code == 'Space') {
            _this.spaceIsDepressed = true;
        } }, function (err) { return debugger_1.Debugger.log(err); });
        this.context.getInputObserver().keyReleased.subscribe(function (e) { if (e.code == 'Space') {
            _this.spaceIsDepressed = false;
        } }, function (err) { return debugger_1.Debugger.log(err); });
    };
    HelloWorldController.prototype.isSpaceDepressed = function () {
        return this.spaceIsDepressed;
    };
    return HelloWorldController;
}(game_controller_1.GameController));
exports.HelloWorldController = HelloWorldController;
