import { ImageBasicsRenderer } from "./image-basics-renderer";
import { ImageBasicsEnvironment } from "./image-basics-environment";
import { Game } from "../../../game-engine/game/game";
export class ImageBasicsGame extends Game {

    loadGame() {

        this.setGameRenderer( new ImageBasicsRenderer( this ) );
        this.setGameEnvironment( new ImageBasicsEnvironment( this ) );

        this.getGameEnvironment().init();
    }

    run() {

        let SELF = this;

        // The LOOP!
        setInterval( function(){

            SELF.getGameEnvironment().update();
            SELF.getGameRenderer().draw();
        }, 200);
    }
}
