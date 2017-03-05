import { Game } from "../../../game-engine/game";
import { PatternFillsRenderer } from "./pattern-fills-renderer";
export class PatternFillsGame extends Game {
    loadGame() {

        this.context.setGameRenderer( new PatternFillsRenderer( this.context ) );
    }

    run() {

        this.context.getGameRenderer().draw();
    }
}
