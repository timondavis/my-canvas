import { gameEngineConfiguration } from "../../environments/environment";
export class Debugger {

    /**
     * Print debug log message to console.
     *
     * @param message
     */
    public static log( message : any ) {

        if (gameEngineConfiguration.showDebugger) {

            try {

                console.log( message );
            } catch ( exception ) {
                return;
            }
        }
    }
}
