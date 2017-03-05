import { Game } from "../../../game-engine/game";
import { ShapeShadowsRenderer } from "./shape-shadows-renderer";
export class ShapeShadowsGame extends Game {

    loadGame() {

        this.context.setGameRenderer( new ShapeShadowsRenderer( this.context ) );
    }

    run() {

        this.context.getGameRenderer().draw();
    }
}
