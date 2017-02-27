"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var game_renderer_1 = require("../../../game-engine/game-renderer");
var HelloWorldRenderer = (function (_super) {
    __extends(HelloWorldRenderer, _super);
    function HelloWorldRenderer() {
        _super.apply(this, arguments);
    }
    HelloWorldRenderer.prototype.draw = function () {
        var context = this.context.getRenderingContext();
        var gEnv = this.context.getGameEnvironment();
        // background
        context.globalAlpha = 1;
        context.fillStyle = '#000000';
        context.fillRect(0, 0, 640, 480);
        context.globalAlpha = 0.25;
        context.drawImage(gEnv.getGlobal('helloWorldImage'), 0, 0);
        context.globalAlpha = gEnv.getDelta('alpha');
        context.font = "72px Sans-Serif";
        context.textBaseline = "top";
        context.fillStyle = "#ffffff";
        context.fillText(gEnv.getGlobal('text'), 150, 200);
    };
    return HelloWorldRenderer;
}(game_renderer_1.GameRenderer));
exports.HelloWorldRenderer = HelloWorldRenderer;
