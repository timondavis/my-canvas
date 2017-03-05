import { Game } from "../../../game-engine/game";
import { CompositeRenderer } from "./composite-renderer";
export class CompositeGame extends Game {
    loadGame() {

        this.context.setGameRenderer( new CompositeRenderer( this.context ) );
    }

    run() {

        this.context.getGameRenderer().draw();
    }
}
