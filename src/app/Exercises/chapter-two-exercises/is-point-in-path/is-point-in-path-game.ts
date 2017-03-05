import { Game } from "../../../game-engine/game";
import { IsPointInPathRenderer } from "./is-point-in-path-renderer";
export class IsPointInPathGame extends Game {

    loadGame() {

        this.context.setGameRenderer( new IsPointInPathRenderer( this.context ) );
    }

    run() {

        let self = this;

        setInterval( function() {
            self.context.getGameRenderer().draw();
        }, 20 );
    }
}
