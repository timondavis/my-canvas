import { GameRenderer } from "../../../game-engine/game-renderer";
export class PatternFillsRenderer extends GameRenderer{
    draw() {

        this.drawGrid();

        let context = this.context.getRenderingContext();

        let filling = new Image();
        filling.src = '/assets/fill_20x20.gif';
        filling.onload = function() {

            let fillPattern1 = context.createPattern( filling, 'repeat' );
            context.strokeStyle = "black";
            context.lineWidth = 3;

            context.fillStyle = fillPattern1;
            context.fillRect( 0, 0, 200, 200 );
            context.strokeRect( 0, 0, 200, 200 );

            let fillPattern2 = context.createPattern( filling, 'no-repeat' );
            context.translate( 250, 50);
            context.fillStyle = fillPattern2;
            context.fillRect( 0, 0, 100, 100 );
            context.strokeRect( 0, 0, 100, 100 );

            let fillPattern3 = context.createPattern( filling, 'repeat-y' );
            context.translate( -250, 0 );
            context.fillStyle = fillPattern3;
            context.fillRect( 0, 220, 100, 100 );
            context.strokeRect( 0, 220, 100, 100 );

            let fillPattern4 = context.createPattern( filling, 'repeat-x' );
            context.translate( 500, 0 );
            context.fillStyle = fillPattern4;
            context.fillRect( 0, 0, 100, 100 );
            context.strokeRect( 0, 0, 100, 100 );

            context.fillStyle = "black";
            context.font = "16px Sans-Serif";

            context.translate( -500, -50 );
            context.fillText( "repeat", 35, 105 );
            context.fillText( "no-repeat", 275, 105 );
            context.fillText( "repeat-y", 35, 325 );
            context.fillText( "repeat-x", 525, 105 );


        };
    }

}
