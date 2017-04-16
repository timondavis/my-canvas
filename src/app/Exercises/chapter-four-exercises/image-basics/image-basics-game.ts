import { Game } from "../../../game-engine/game";
import { ImageBasicsRenderer } from "./image-basics-renderer";
import { ImageBasicsEnvironment } from "./image-basics-environment";
export class ImageBasicsGame extends Game {
    loadGame() {

        this.getContext().setGameRenderer( new ImageBasicsRenderer( this.context ) );
        this.getContext().setGameEnvironment( new ImageBasicsEnvironment( this.context ) );

        this.getContext().getGameEnvironment().init();
    }

    run() {

        let SELF = this;

        // The LOOP!
        setInterval( function(){

            SELF.getContext().getGameEnvironment().update();

            if ( SELF.getContext().getGameEnvironment().getGameEntities().getRenderableGameEntity( 'spaceship' ).assetsLoaded ) {

                SELF.getContext().getGameRenderer().draw();
            }
        }, 20);
    }
}
