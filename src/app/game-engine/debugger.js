"use strict";
var environment_1 = require("../../environments/environment");
var Debugger = (function () {
    function Debugger() {
    }
    /**
     * Print debug log message to console.
     *
     * @param message
     */
    Debugger.log = function (message) {
        if (environment_1.gameEngineConfiguration.showDebugger) {
            try {
                console.log(message);
            }
            catch (exception) {
                return;
            }
        }
    };
    return Debugger;
}());
exports.Debugger = Debugger;
