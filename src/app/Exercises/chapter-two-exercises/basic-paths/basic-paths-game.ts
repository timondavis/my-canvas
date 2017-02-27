import { Game } from "../../../game-engine/game";
import { BasicPathsRenderer } from "./basic-paths-renderer";
export class BasicPathsGame extends Game {

    loadGame() {

        this.context.setGameRenderer( new BasicPathsRenderer( this.context ) );
    }

    run() {

        this.context.getGameRenderer().draw();
    }
}
