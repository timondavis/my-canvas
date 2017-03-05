"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var renderable_game_entity_1 = require("../../../../game-engine/game-entity/renderable-game-entity");
var Square = (function (_super) {
    __extends(Square, _super);
    function Square() {
        _super.call(this);
        this.rotation = 0;
        this.color = "red";
        this.width = 50;
        this.height = 50;
        this.x = 0;
        this.y = 0;
        this.rotationSpeed = 1;
        this.rotation = 0;
    }
    Square.prototype.update = function () {
        this.rotation += (0.25) * this.rotationSpeed;
        if (this.rotation >= 360.0) {
            this.rotation = 0;
        }
    };
    Square.prototype.render = function (context) {
        context.setTransform(1, 0, 0, 1, 0, 0);
        context.translate((this.x + (0.5) * this.width), (this.y + (0.5) * this.height));
        context.scale(2, 2);
        var angleInRadians = (this.rotation) * (Math.PI / 180);
        context.rotate(angleInRadians);
        context.fillStyle = this.color;
        context.fillRect((-1) * (0.5 * this.width), (-1) * (0.5 * this.height), this.width, this.height);
    };
    return Square;
}(renderable_game_entity_1.RenderableGameEntity));
exports.Square = Square;
