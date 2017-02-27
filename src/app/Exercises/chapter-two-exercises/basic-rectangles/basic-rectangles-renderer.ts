import { GameRenderer } from "../../../game-engine/game-renderer";
export class BasicRectanglesRenderer extends GameRenderer {

    public draw() {

        let context = this.context.getRenderingContext();

        context.fillStyle = "#000000";
        context.strokeStyle = "#ff00ff";
        context.lineWidth = 2;
        context.fillRect( 10, 10, 40, 40 );
        context.strokeRect( 0, 0, 60, 60 );
        context.clearRect( 20, 20, 20, 20 );
    }
}
