import { Debugger } from "../../game-engine/debugger";
import { GuessTheLetter } from "../../game-engine/guesstheletter/guess-the-letter";
import { GameContext } from "../../game-engine/game-context";

export class ChapterOneExercises {

    public static ex1( context2d : CanvasRenderingContext2D ) {

        // Draw Square
        Debugger.log( 'Draw Square' );
        context2d.fillStyle = '#ffffaa';
        context2d.fillRect(0, 0, 500, 300);

        // Draw Message
        Debugger.log( 'Draw Message' );
        context2d.fillStyle = '#000000';
        context2d.font = "20px Sans-Serif";
        context2d.textBaseline = "top";
        context2d.fillText( "Hello World!", 98, 80);

        // Draw Image
        Debugger.log( 'Draw Image' );
        let helloWorldImage = new Image();
        helloWorldImage.onload = function() {
            context2d.drawImage( helloWorldImage, 160, 111 );
        };
        helloWorldImage.src = "/assets/helloworld.gif";

        // Draw Inner Rectangle
        Debugger.log( 'Draw Final Rectangle' );
        context2d.strokeStyle = "#000000";
        context2d.strokeRect(5,  5, 490, 290);

    }

    public static load_GuessTheLetter( context : GameContext ) {

        let game = new GuessTheLetter( context );
    }
}
