"use strict";
var Game = (function () {
    function Game(context) {
        this.context = context;
        this.isGameLoaded = false;
    }
    Game.prototype.getContext = function () {
        return this.context;
    };
    return Game;
}());
exports.Game = Game;
