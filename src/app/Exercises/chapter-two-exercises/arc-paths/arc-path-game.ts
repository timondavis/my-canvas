
import { Game } from "../../../game-engine/game";
import { ArcPathRenderer } from "./arc-path-renderer";
import { ArcPathEnvironment } from "./arc-path-environment";
import { ArcPathController } from "./arc-path-controller";
export class ArcPathGame extends Game {

    loadGame() {

        this.context.setGameRenderer( new ArcPathRenderer( this.context ) );
        this.context.setGameController( new ArcPathController( this.context ) );
        this.context.setGameEnvironment( new ArcPathEnvironment( this.context ) );

        this.context.getGameEnvironment().init();
    }

    run() {

        let renderer = this.context.getGameRenderer();
        let environment = <ArcPathEnvironment> this.context.getGameEnvironment();

        this.context.getGameRenderer().draw();

        setInterval( function () {

            environment.update();
            renderer.draw();

        }, environment.loopWaitTime )
    }

}
