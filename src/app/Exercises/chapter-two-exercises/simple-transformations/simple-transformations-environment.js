"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var game_environment_1 = require("../../../game-engine/game-environment");
var square_1 = require("./game-object/square");
var SimpleTransformationsEnvironment = (function (_super) {
    __extends(SimpleTransformationsEnvironment, _super);
    function SimpleTransformationsEnvironment() {
        _super.apply(this, arguments);
    }
    SimpleTransformationsEnvironment.prototype.init = function () {
        this.s1 = new square_1.Square();
        this.s1.x = 150;
        this.s1.y = 100;
        this.s1.color = "red";
        this.s2 = new square_1.Square();
        this.s2.x = 300;
        this.s2.y = 100;
        this.s2.color = "blue";
        this.s2.rotation = 11.25;
        this.s2.rotationSpeed = 4;
        this.s3 = new square_1.Square();
        this.s3.x = 450;
        this.s3.y = 100;
        this.s3.color = "yellow";
        this.s3.rotation = 22.5;
        this.s3.rotationSpeed = 8;
        this.s4 = new square_1.Square();
        this.s4.x = 600;
        this.s4.y = 100;
        this.s4.color = "purple";
        this.s4.rotation = 33.75;
        this.s4.rotationSpeed = 16;
    };
    SimpleTransformationsEnvironment.prototype.update = function () {
        var controller = this.context.getGameController();
        this.s1.update();
        this.s2.update();
        this.s3.update();
        this.s4.update();
        if (controller.isLeftDepressed()) {
            this.s4.rotationSpeed -= 0.05;
        }
        if (controller.isRightDepressed()) {
            this.s4.rotationSpeed += 0.05;
        }
        if (controller.isUpDepressed()) {
            this.s4.y -= 0.2;
        }
        if (controller.isDownDepressed()) {
            this.s4.y += 0.2;
        }
    };
    return SimpleTransformationsEnvironment;
}(game_environment_1.GameEnvironment));
exports.SimpleTransformationsEnvironment = SimpleTransformationsEnvironment;
