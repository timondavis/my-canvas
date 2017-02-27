"use strict";
var Game = (function () {
    function Game(context) {
        this.context = context;
    }
    Game.prototype.loadGame = function () {
    };
    Game.prototype.getContext = function () {
        return this.context;
    };
    return Game;
}());
exports.Game = Game;
