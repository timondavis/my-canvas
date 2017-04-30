import { Game } from "../../../game-engine/game/game";
import { TanksRenderer } from "./tanks-renderer";
import { TanksEnvironment } from "./tanks-environment";
export class TanksGame extends Game {
    loadGame() {
        this.setGameRenderer( new TanksRenderer( this ) );
        this.setGameEnvironment( new TanksEnvironment ( this ) );

        this.getGameEnvironment().init();
    }

    run() {

        let SELF = this;

        setInterval( function() {

            SELF.getGameEnvironment().update();
            SELF.getGameRenderer().draw();

        }, 20);
    }
}
