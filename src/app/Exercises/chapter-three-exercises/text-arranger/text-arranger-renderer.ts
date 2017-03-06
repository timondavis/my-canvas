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

        context.fillStyle = "yellow";
        context.fillRect( 0, 0, canvasWidth, canvasHeight );

        // Set Fill Color
        context.fillStyle = "red";

        // Set Stroke Color
        context.strokeStyle = "black";

        // Set Stroke Width
        context.lineWidth = 2;

        // Set Font
        context.font = environment.fontStyle + " " + environment.fontWeight + " 50px serif";

        Debugger.log( environment.fontStyle + " " + environment.fontWeight + " 50px serif" );

        switch( environment.fillOrStroke ) {

            case( "fill" ): {

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
}
