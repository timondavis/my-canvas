import { GameContext } from "../../../../game-engine/game-context";
import { GameRenderer } from "../../../../game-engine/game-renderer";
import { Debugger } from "../../../../game-engine/debugger";
import { GuessTheLetterGameEnvironment } from "../game-environment/guess-the-letter-game-environment";

export class GuessTheLetterRenderer extends GameRenderer {

    public draw() {

        if ( this.context.getRenderingContext() == null ) { throw( "Need a CanvasRenderingContext2d object to draw")}

        let context = this.context.getRenderingContext();
        let environment = ( <GuessTheLetterGameEnvironment> this.context.getGameEnvironment() );

        // Background
        context.fillStyle = "#ffffaa";
        context.fillRect( 0, 0, 500, 300 );

        // Box
        context.fillStyle = "#000000";
        context.strokeRect( 5, 5, 490, 290 );

        context.textBaseline = "top";

        // Date
        context.fillStyle = "#000000";
        context.font = "10px Sans-Serif";
        context.fillText( environment.today.toDateString() , 150, 10 );

        // Message
        context.fillStyle = "#ff0000";
        context.font = "14px Sans-Serif";
        context.fillText( environment.message, 125 , 30 );

        // Stats
        context.fillStyle = "#109910";
        context.font = "16px Sans-Serif";
        context.fillText( "Guesses: " + environment.guesses, 215, 50 );

        // Higher Or Lower
        context.fillStyle = "#000000" ;
        context.font = "16px Sans-Serif";
        context.fillText( "Higher or Lower: " + environment.higherOrLower, 150, 125 );

        // Letters Guessed
        context.fillStyle = "#ff0000";
        context.font = "16px Sans-Serif";

        if ( environment.gameOver ) {

            context.fillStyle = "#ff0000bcdefghijklmno";
            context.font = "40px Sans-Serif";
            context.fillText( "You got it!", 150, 180 );
        }

    }
}
