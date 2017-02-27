"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var game_environment_1 = require("../../../game-engine/game-environment");
var HelloWorldEnvironment = (function (_super) {
    __extends(HelloWorldEnvironment, _super);
    function HelloWorldEnvironment() {
        _super.apply(this, arguments);
    }
    HelloWorldEnvironment.prototype.init = function () {
        this.globals = {
            'text': 'Hello World',
            'helloWorldImage': HelloWorldEnvironment.getHTMLbg(),
            'loopWaitTime': 20
        };
        this.deltas = {
            'alpha': 0,
            'fadeIn': true
        };
    };
    HelloWorldEnvironment.prototype.update = function () {
        var controller = this.context.getGameController();
        if (controller.isSpaceDepressed()) {
            return;
        }
        if (this.getDelta('fadeIn')) {
            var alpha = this.getDelta('alpha');
            alpha += .01;
            if (alpha >= 1.0) {
                alpha = 1;
                this.setDelta('fadeIn', false);
            }
            this.setDelta('alpha', alpha);
        }
        else {
            var alpha = this.getDelta('alpha');
            alpha -= .01;
            if (alpha < 0) {
                alpha = 0;
                this.setDelta('fadeIn', true);
            }
            this.setDelta('alpha', alpha);
        }
    };
    HelloWorldEnvironment.getHTMLbg = function () {
        var img = new Image();
        img.src = "/assets/html5bg.jpg";
        return img;
    };
    return HelloWorldEnvironment;
}(game_environment_1.GameEnvironment));
exports.HelloWorldEnvironment = HelloWorldEnvironment;
