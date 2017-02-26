export class Debugger {

    /**
     * Print debug log message to console.
     *
     * @param message
     */
    public static log( message : string ) {

        try {

            console.log( message );
        } catch ( exception ) {
            return;
        }

    }
}
