import { Game } from "../../../game-engine/game";
import { CanvasClearingRenderer } from "./canvas-clearing-renderer";
import { CanvasClearingEnvironment } from "./canvas-clearing-environment";
export class CanvasClearingGame extends Game{
    loadGame() {

        this.context.setGameRenderer( new CanvasClearingRenderer( this.context ) );
        this.context.setGameEnvironment( new CanvasClearingEnvironment( this.context ) );

        this.context.getGameEnvironment().init();
    }

    run() {

        let self = this;

        setInterval( function() {

            self.context.getGameEnvironment().update();
            self.context.getGameRenderer().draw();

        }, 20)
    }
}
