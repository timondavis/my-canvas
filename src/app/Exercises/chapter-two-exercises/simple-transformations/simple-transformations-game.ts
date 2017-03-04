import { Game } from "../../../game-engine/game";
import { SimpleTransformationsRenderer } from "./simple-transformations-renderer";
import { SimpleTransformationsEnvironment } from "./simple-transformations-environment";
import { DefaultGameController } from "../../../game-engine/library/default-game-controller";
export class SimpleTransformationsGame extends Game {

    loadGame() {

        this.context.setGameRenderer( new SimpleTransformationsRenderer( this.context ) );
        this.context.setGameEnvironment( new SimpleTransformationsEnvironment( this.context ) );
        this.context.setGameController( new DefaultGameController( this.context ) );

        this.context.getGameEnvironment().init();
        this.context.getGameController().init();
    }

    run() {

        let self = this;

        setInterval( function() {

            self.context.getGameEnvironment().update();
            self.context.getGameRenderer().draw();
        });
    }
}
