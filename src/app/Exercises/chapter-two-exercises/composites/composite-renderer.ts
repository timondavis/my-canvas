import { GameRenderer } from "../../../game-engine/game-renderer";
export class CompositeRenderer extends GameRenderer {
    draw() {

        let context = this.context.getRenderingContext();

        // draw a bix box on the screen
        context.fillStyle = "black";
        context.fillRect( 10, 10, 200, 200 );

        //leave global Composition as is
        context.fillStyle = "red";
        context.fillRect( 1, 1, 50, 50 );

        // now set it to source over
        context.globalCompositeOperation = "source-over";

        //draw a red square next to the other one
        context.fillRect( 60, 1, 50, 50 );

        // now set it to destination atop
        context.globalCompositeOperation = "destination-over";
        //context.globalCompositeOperation = "destination-atop";

        // draw a red square there too
        context.fillRect( 1, 60, 50, 50 );

        // now set globalAlpha
        context.globalAlpha = 0.5;

        // now set it to source-atop
        context.globalCompositeOperation = "source-atop";
        context.fillRect( 60, 60, 50, 50 );

    }
}
