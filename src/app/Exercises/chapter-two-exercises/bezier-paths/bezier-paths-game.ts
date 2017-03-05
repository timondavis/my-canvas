import { Game } from "../../../game-engine/game";
import { BezierPathsRenderer } from "./bezier-paths-renderer";
import { BezierPathsEnvironment } from "./bezier-paths-environment";
import { BezierPathsController } from "./bezier-paths-controller";
export class BezierPathsGame extends Game {

    loadGame() {

        this.context.setGameController( new BezierPathsController( this.context ) );
        this.context.setGameEnvironment( new BezierPathsEnvironment( this.context ) );
        this.context.setGameRenderer( new BezierPathsRenderer( this.context ) );

        this.context.getGameController().init();
        this.context.getGameEnvironment().init();
    }

    run() {

        let env = <BezierPathsEnvironment> this.context.getGameEnvironment();
        let self = this;

        setInterval( function() {

            env.update();
            self.context.getGameRenderer().draw();

        }, env.loopTime );

    }
}
