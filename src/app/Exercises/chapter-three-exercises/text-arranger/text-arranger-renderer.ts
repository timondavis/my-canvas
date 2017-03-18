import { GameRenderer } from "../../../game-engine/game-renderer";
import { TextArrangerEnvironment } from "./text-arranger-environment";
import { Debugger } from "../../../game-engine/debugger";
import { BasicRenderer } from "./renderers/basic-renderer";
import { GameContext } from "../../../game-engine/game-context";
import { RenderingData } from "./renderers/rendering-data";
import { LinearGradientRenderer } from "./renderers/linear-gradient-renderer";
export class TextArrangerRenderer extends GameRenderer {

    draw() {

        let renderingData = new RenderingData();

        let context =
            renderingData.context = this.context.getRenderingContext();
        let environment =
            renderingData.environment = <TextArrangerEnvironment> this.context.getGameEnvironment();

        let canvasWidth  =
            renderingData.canvasWidth = parseFloat( this.context.getCanvasElement().getAttribute( 'width' ) );
        let canvasHeight =
            renderingData.canvasHeight = parseFloat( this.context.getCanvasElement().getAttribute( 'height' ) );

        let messageWidth =
            renderingData.messageWidth = context.measureText( environment.message ).width;

        this.clear();

        this.setGridBackgroundColor( "yellow" );
        this.setGridColor( "red" );
        this.drawGrid();

        context.globalAlpha = 1;

        // Set text baseline
        context.textBaseline = environment.textBaseline;

        // Set text alignment
        context.textAlign = environment.textAlign;

        // Set Stroke Color
        context.strokeStyle = "black";

        // Set Stroke Width
        context.lineWidth = 2;

        // Set Alpha
        context.globalAlpha = environment.textAlpha;

        // Set Font
        context.font = environment.fontStyle + " " + environment.fontWeight + " " + environment.fontSize + "px serif";

        // Set shadow parameters
        context.shadowOffsetX = environment.shadowX;
        context.shadowOffsetY = environment.shadowY;
        context.shadowBlur    = environment.shadowBlur;
        context.shadowColor   = environment.shadowColor;


        if ( environment.fillType == 'basic' ) { BasicRenderer.draw( renderingData ); }
        if ( environment.fillType == 'linear-gradient' ) { LinearGradientRenderer.draw( renderingData ); }
    }
}
