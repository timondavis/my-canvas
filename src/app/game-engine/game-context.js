"use strict";
var GameContext = (function () {
    function GameContext(inputObserver, renderingContext, gameEnvironment, gameRenderer) {
        if (renderingContext === void 0) { renderingContext = null; }
        if (gameEnvironment === void 0) { gameEnvironment = null; }
        if (gameRenderer === void 0) { gameRenderer = null; }
        this.inputObserver = inputObserver;
        this.renderingContext = renderingContext;
        this.gameEnvironment = gameEnvironment;
        this.gameRenderer = gameRenderer;
        this.game = null;
    }
    GameContext.prototype.getInputObserver = function () {
        return this.inputObserver;
    };
    GameContext.prototype.getRenderingContext = function () {
        return this.renderingContext;
    };
    GameContext.prototype.getGameEnvironment = function () {
        return this.gameEnvironment;
    };
    GameContext.prototype.getGameRenderer = function () {
        return this.gameRenderer;
    };
    GameContext.prototype.getGameController = function () {
        return this.gameController;
    };
    GameContext.prototype.getGame = function () {
        return this.game;
    };
    GameContext.prototype.setGameEnvironment = function (gameEnvironment) {
        this.gameEnvironment = gameEnvironment;
    };
    GameContext.prototype.setRenderingContext = function (renderingContext) {
        this.renderingContext = renderingContext;
    };
    GameContext.prototype.setGameRenderer = function (gameRenderer) {
        this.gameRenderer = gameRenderer;
    };
    GameContext.prototype.setGameController = function (gameController) {
        this.gameController = gameController;
    };
    GameContext.prototype.setGame = function (game) {
        this.game = game;
    };
    return GameContext;
}());
exports.GameContext = GameContext;
