"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var game_1 = require("../../../game-engine/game");
var simple_transformations_renderer_1 = require("./simple-transformations-renderer");
var simple_transformations_environment_1 = require("./simple-transformations-environment");
var default_game_controller_1 = require("../../../game-engine/library/default-game-controller");
var SimpleTransformationsGame = (function (_super) {
    __extends(SimpleTransformationsGame, _super);
    function SimpleTransformationsGame() {
        _super.apply(this, arguments);
    }
    SimpleTransformationsGame.prototype.loadGame = function () {
        this.context.setGameRenderer(new simple_transformations_renderer_1.SimpleTransformationsRenderer(this.context));
        this.context.setGameEnvironment(new simple_transformations_environment_1.SimpleTransformationsEnvironment(this.context));
        this.context.setGameController(new default_game_controller_1.DefaultGameController(this.context));
        this.context.getGameEnvironment().init();
        this.context.getGameController().init();
    };
    SimpleTransformationsGame.prototype.run = function () {
        var self = this;
        setInterval(function () {
            self.context.getGameEnvironment().update();
            self.context.getGameRenderer().draw();
        });
    };
    return SimpleTransformationsGame;
}(game_1.Game));
exports.SimpleTransformationsGame = SimpleTransformationsGame;
