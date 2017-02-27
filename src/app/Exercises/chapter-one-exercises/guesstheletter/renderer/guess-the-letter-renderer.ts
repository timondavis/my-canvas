import { GameContext } from "../../../../game-engine/game-context";
import { GameRenderer } from "../../../../game-engine/game-renderer";
import { Debugger } from "../../../../game-engine/debugger";

export class GuessTheLetterRenderer extends GameRenderer {

    public constructor( private context : GameContext ) {

        super();
    }

    public draw() {

        if ( this.context.getRenderingContext() == null ) { throw( "Need a CanvasRenderingContext2d object to draw")}

        let self = this;

        // Draw Square
        Debugger.log( 'Draw Square' );
        this.context.getRenderingContext().fillStyle = '#ffffaa';
        this.context.getRenderingContext().fillRect(0, 0, 500, 300);

        // Draw Message
        Debugger.log( 'Draw Message' );
        this.context.getRenderingContext().fillStyle = '#000000';
        this.context.getRenderingContext().font = "20px Sans-Serif";
        this.context.getRenderingContext().textBaseline = "top";
        this.context.getRenderingContext().fillText( "Hello World!", 98, 80);

        // Draw Image
        Debugger.log( 'Draw Image' );
        let helloWorldImage = new Image();
        helloWorldImage.onload = function() {
            self.context.getRenderingContext().drawImage( helloWorldImage, 160, 111 );
        };
        helloWorldImage.src = "/assets/helloworld.gif";

        // Draw Inner Rectangle
        Debugger.log( 'Draw Final Rectangle' );
        this.context.getRenderingContext().strokeStyle = "#000000";
        this.context.getRenderingContext().strokeRect(5,  5, 490, 290);        // Draw Square
    }
}
