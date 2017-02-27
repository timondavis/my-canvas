"use strict";
var GameEnvironment = (function () {
    function GameEnvironment(context) {
        this.context = context;
        this.globals = {};
        this.deltas = {};
    }
    GameEnvironment.prototype.getGlobal = function (key) {
        return this.globals[key];
    };
    GameEnvironment.prototype.getDelta = function (key) {
        return this.deltas[key];
    };
    GameEnvironment.prototype.setGlobal = function (key, value) {
        this.globals[key] = value;
    };
    GameEnvironment.prototype.setDelta = function (key, value) {
        this.deltas[key] = value;
    };
    return GameEnvironment;
}());
exports.GameEnvironment = GameEnvironment;
