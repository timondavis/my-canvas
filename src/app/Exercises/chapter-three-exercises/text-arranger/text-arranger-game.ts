import { Game } from "../../../game-engine/game";
import { TextArrangerRenderer } from "./text-arranger-renderer";
import { TextArrangerEnvironment } from "./text-arranger-environment";
import { Debugger } from "../../../game-engine/debugger";
export class TextArrangerGame extends Game {

    loadGame() {

        this.context.setGameRenderer( new TextArrangerRenderer( this.context ) );
        this.context.setGameEnvironment( new TextArrangerEnvironment( this.context ) );

        this.context.getGameEnvironment().init();
    }

    run() {

        let self = this;

        setInterval( function() {

            self.context.getGameEnvironment().update();
            self.context.getGameRenderer().draw();
        }, 20 );
    }
}
