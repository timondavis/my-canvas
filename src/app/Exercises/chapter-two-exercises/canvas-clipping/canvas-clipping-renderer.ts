import { GameRenderer } from "../../../game-engine/game-renderer";
import { CanvasClippingEnvironment } from "./canvas-clipping-environment";
import { DefaultGameController } from "../../../game-engine/library/default-game-controller";
import { Debugger } from "../../../game-engine/debugger";
export class CanvasClippingRenderer extends GameRenderer {

    draw() {

        let c = this.context.getRenderingContext();
        let env = <CanvasClippingEnvironment> this.context.getGameEnvironment();
        let ctl = <DefaultGameController> this.context.getGameController();

        // draw a big box on the screen
        c.fillStyle = "black";
        c.fillRect( 10, 10, 200, 200 );
        c.save();
        c.beginPath(); // Clip the canvas to a 50 x 50 square starting at 0,0
        c.rect( 0, 0, 50, 50 );
        c.clip();

        // red circle
        c.beginPath();
        c.strokeStyle = "red";
        c.lineWidth = 5;
        c.arc( 100, 100, 100, (Math.PI/180)*0, (Math.PI/180)*360, false );

        // full circle
        c.stroke();
        c.closePath();

        c.restore();


        // Reclip to entire canvas
        c.beginPath();
        c.rect( 0, 0, 500, 500 );
        c.clip();

        // Draw a bile line that is not clipped
        c.beginPath();
        c.strokeStyle = "blue";
        c.lineWidth = 5;
        c.arc( 100, 100, 50, 0, (Math.PI / 180) * 360, false );


        // Full circle
        c.stroke();
        c.closePath();
    }
}
