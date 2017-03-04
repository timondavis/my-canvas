import { Game } from "../../../game-engine/game";
import { SimpleTransformationsRenderer } from "./simple-transformations-renderer";
import { SimpleTransformationsEnvironment } from "./simple-transformations-environment";
export class SimpleTransformationsGame extends Game {

    loadGame() {

        this.context.setGameRenderer( new SimpleTransformationsRenderer( this.context ) );
        this.context.setGameEnvironment( new SimpleTransformationsEnvironment( this.context ) );

        this.context.getGameEnvironment().init();
    }

    run() {

        let self = this;

        setInterval( function() {

            self.context.getGameEnvironment().update();
            self.context.getGameRenderer().draw();
        });
    }
}
