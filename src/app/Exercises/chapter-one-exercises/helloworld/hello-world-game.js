"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var game_1 = require("../../../game-engine/game");
var hello_world_environment_1 = require("./hello-world-environment");
var hello_world_renderer_1 = require("./hello-world-renderer");
var hello_world_controller_1 = require("./hello-world-controller");
var HelloWorldGame = (function (_super) {
    __extends(HelloWorldGame, _super);
    function HelloWorldGame(context) {
        _super.call(this, context);
        this.context.setGameEnvironment(new hello_world_environment_1.HelloWorldEnvironment(this.context));
        this.context.setGameRenderer(new hello_world_renderer_1.HelloWorldRenderer(this.context));
        this.context.setGameController(new hello_world_controller_1.HelloWorldController(this.context));
    }
    HelloWorldGame.prototype.loadGame = function () {
        this.context.getGameEnvironment().init();
    };
    HelloWorldGame.prototype.run = function () {
        var gameEnv = this.context.getGameEnvironment();
        var renderer = this.context.getGameRenderer();
        this.context.getGameController().init();
        setInterval(function () { gameEnv.update(); renderer.draw(); }, gameEnv.getGlobal('loopWaitTime'));
    };
    return HelloWorldGame;
}(game_1.Game));
exports.HelloWorldGame = HelloWorldGame;
