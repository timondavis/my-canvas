import { Game } from "../../../game-engine/game";
import { GameContext } from "../../../game-engine/game-context";
import { HelloWorldEnvironment } from "./hello-world-environment";
import { HelloWorldRenderer } from "./hello-world-renderer";
import { HelloWorldController } from "./hello-world-controller";
export class HelloWorldGame extends Game {

    public constructor( context : GameContext ) {

        super( context );

        this.context.setGameEnvironment( new HelloWorldEnvironment( this.context ) );
        this.context.setGameRenderer( new HelloWorldRenderer( this.context ) );
        this.context.setGameController( new HelloWorldController( this.context ) );
    }
s
    public loadGame() {

        ( <HelloWorldEnvironment> this.context.getGameEnvironment() ).init();
    }

    public run() {

        let gameEnv = this.context.getGameEnvironment();
        let renderer = this.context.getGameRenderer();
        this.context.getGameController().init();

        setInterval(
            () => { gameEnv.update(); renderer.draw(); },
            gameEnv.getGlobal( 'loopWaitTime' ) );

    }
}
