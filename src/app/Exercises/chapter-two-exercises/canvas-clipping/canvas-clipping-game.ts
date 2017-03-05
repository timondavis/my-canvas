import { Game } from "../../../game-engine/game";
import { CanvasClippingRenderer } from "./canvas-clipping-renderer";
import { CanvasClippingEnvironment } from "./canvas-clipping-environment";
import { DefaultGameController } from "../../../game-engine/library/default-game-controller";
export class CanvasClippingGame extends Game {

    loadGame() {

        this.context.setGameController( new DefaultGameController( this.context ) );
        this.context.setGameEnvironment( new CanvasClippingEnvironment( this.context ) );
        this.context.setGameRenderer( new CanvasClippingRenderer( this.context ) );

        this.context.getGameController().init();
        this.context.getGameEnvironment().init();
    }

    run() {

        let gameEnvironment = this.context.getGameEnvironment();
        let gameRenderer =  this.context.getGameRenderer();
        let ctl = <DefaultGameController> this.context.getGameController();

        setInterval( function() {

            gameEnvironment.update();

            if ( ! ctl.isDownDepressed() ) {

                gameRenderer.draw();
            }

        }, 20 );
    }
}
