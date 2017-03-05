"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var game_renderer_1 = require("../../../game-engine/game-renderer");
var SimpleTransformationsRenderer = (function (_super) {
    __extends(SimpleTransformationsRenderer, _super);
    function SimpleTransformationsRenderer() {
        _super.apply(this, arguments);
    }
    SimpleTransformationsRenderer.prototype.draw = function () {
        var context = this.context.getRenderingContext();
        var environment = this.context.getGameEnvironment();
        context.restore();
        this.setGridColor("lightgreen");
        this.setGridSize(50);
        this.setGridFontSize(12);
        this.drawGrid();
        context.save();
        environment.s1.render(context);
        environment.s2.render(context);
        environment.s3.render(context);
        environment.s4.render(context);
    };
    return SimpleTransformationsRenderer;
}(game_renderer_1.GameRenderer));
exports.SimpleTransformationsRenderer = SimpleTransformationsRenderer;
