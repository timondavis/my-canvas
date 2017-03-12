import { GameRenderer } from "../../../game-engine/game-renderer";
import { TextArrangerEnvironment } from "./text-arranger-environment";
import { Debugger } from "../../../game-engine/debugger";
export class TextArrangerRenderer extends GameRenderer {

    draw() {

        let context = this.context.getRenderingContext();
        let environment = <TextArrangerEnvironment> this.context.getGameEnvironment();

        let canvasWidth  = parseFloat( this.context.getCanvasElement().getAttribute( 'width' ) );
        let canvasHeight = parseFloat( this.context.getCanvasElement().getAttribute( 'height' ) );

        let messageWidth = context.measureText( environment.message ).width;

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

        switch( environment.fillOrStroke ) {

            case( "fill" ): {

                TextArrangerRenderer.prepareBasicFillStyle( context, environment );

                context.fillText( environment.message,
                    ( canvasWidth / 2 ) - ( messageWidth / 2 ), ( canvasHeight / 2 ) );
                break;
            }
            case( "stroke" ): {

                context.strokeText( environment.message,
                    ( canvasWidth / 2 ) - ( messageWidth / 2 ), ( canvasHeight / 2 ) );
                break;
            }
            case( "both" ): {

                context.fillText( environment.message,
                    ( canvasWidth / 2 ) - ( messageWidth / 2 ), ( canvasHeight / 2 ) );
                context.strokeText( environment.message,
                    ( canvasWidth / 2 ) - ( messageWidth / 2 ), ( canvasHeight / 2 ) );
                break;
            }
            default: break;
        }
    }

    protected static prepareBasicFillStyle( context : CanvasRenderingContext2D, environment : TextArrangerEnvironment ) {

        context.fillStyle = environment.fillColor;
    }
}
