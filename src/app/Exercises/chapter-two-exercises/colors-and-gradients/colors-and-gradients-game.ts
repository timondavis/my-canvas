import { Game } from "../../../game-engine/game";
import { ColorsAndGradientsRenderer } from "./colors-and-gradients-renderer";
export class ColorsAndGradientsGame extends Game{
    loadGame() {

        this.context.setGameRenderer( new ColorsAndGradientsRenderer( this.context ) );
    }

    run() {

        this.context.getGameRenderer().draw();
    }
}
