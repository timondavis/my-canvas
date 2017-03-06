import { GameRenderer } from "../../../game-engine/game-renderer";
import { TextArrangerEnvironment } from "./text-arranger-environment";
export class TextArrangerRenderer extends GameRenderer {

    draw() {

        let context = this.context.getRenderingContext();
        let environment = <TextArrangerEnvironment> this.context.getGameEnvironment();

        context.fillStyle = "yellow";
        context.fillRect( 0, 0, 800, 600 );
        context.fillStyle = "red";
        context.strokeStyle = "black";
        context.lineWidth = 2;
        context.font = "30px Sans-Serif";

        switch( environment.fillOrStroke ) {

            case( "fill" ): {

                context.fillText( "Hello World", 100, 100 );
                break;
            }
            case( "stroke" ): {

                context.strokeText( "Hello World", 100, 100 );
                break;
            }
            case( "both" ): {

                context.fillText( "Hello World", 100, 100 );
                context.strokeText( "Hello World", 100, 100 );
                break;
            }
            default: break;
        }

    }
}
