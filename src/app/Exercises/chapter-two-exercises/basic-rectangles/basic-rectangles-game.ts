import { Game } from "../../../game-engine/game";
import { BasicRectanglesRenderer } from "./basic-rectangles-renderer";

export class BasicRectanglesGame extends Game {

    public loadGame() {

        this.context.setGameRenderer( new BasicRectanglesRenderer( this.context ) );

    }
    public run() {

        this.context.getGameRenderer().draw();

    }
}
