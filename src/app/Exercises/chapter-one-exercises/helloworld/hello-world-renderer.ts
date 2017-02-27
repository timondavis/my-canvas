import { GameRenderer } from "../../../game-engine/game-renderer";
import { HelloWorldEnvironment } from "./hello-world-environment";
import { Debugger } from "../../../game-engine/debugger";

export class HelloWorldRenderer extends GameRenderer {

    public draw() {

        let context = this.context.getRenderingContext();
        let gEnv = this.context.getGameEnvironment();

        // background
        context.globalAlpha = 1;
        context.fillStyle = '#000000';
        context.fillRect( 0, 0, 640, 480 );

        context.globalAlpha = 0.25;
        context.drawImage( gEnv.getGlobal('helloWorldImage'), 0, 0 );

        context.globalAlpha = gEnv.getDelta( 'alpha' );
        context.font = "72px Sans-Serif";
        context.textBaseline = "top";
        context.fillStyle = "#ffffff";
        context.fillText ( gEnv.getGlobal( 'text' ), 150, 200 );
    }
}
