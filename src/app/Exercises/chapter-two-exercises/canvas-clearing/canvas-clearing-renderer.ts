import { GameRenderer } from "../../../game-engine/game-renderer";
import { CanvasClearingEnvironment } from "./canvas-clearing-environment";
export class CanvasClearingRenderer extends GameRenderer {

    draw() {

        let theCanvas = this.context.getCanvasElement();
        let context = this.context.getRenderingContext();
        let environment = <CanvasClearingEnvironment> this.context.getGameEnvironment();

        context.clearRect( 0, 0,
            parseFloat( theCanvas.getAttribute( 'width' ) ),
            parseFloat( theCanvas.getAttribute( 'height' ) ) );

        context.beginPath();

        context.strokeStyle = "red";
        context.lineWidth = 5;
        context.moveTo( 0, environment.yOffset );
        context.lineTo( 50, environment.yOffset );
        context.lineTo( 50, 50 + environment.yOffset );
        context.stroke();
        context.closePath();
    }
}
