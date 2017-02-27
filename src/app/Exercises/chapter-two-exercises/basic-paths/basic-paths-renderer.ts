import { GameRenderer } from "../../../game-engine/game-renderer";
export class BasicPathsRenderer extends GameRenderer {

    draw() {

        let context = this.context.getRenderingContext();

        // Path #1
        context.strokeStyle = "black";
        context.lineWidth = 10;
        context.lineJoin = 'bevel';
        context.lineCap = "round";

        context.beginPath();
        context.moveTo( 0, 0 );
        context.lineTo( 25, 0 );
        context.lineTo( 25, 25 );
        context.stroke();
        context.closePath();

        // Path #2
        context.beginPath();
        context.moveTo( 10, 50 );
        context.lineTo( 35, 50 );
        context.lineTo( 35, 75 );
        context.stroke();
        context.closePath();

        // Path #3
        context.lineJoin = "round";
        context.lineCap = "butt";

        context.beginPath();
        context.moveTo( 10, 100 );
        context.lineTo( 35, 100 );
        context.lineTo( 35, 125 );
        context.stroke();
        context.closePath();
    }

}
