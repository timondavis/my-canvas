import { GameRenderer } from "../../../game-engine/game-renderer";
export class ImageBasicsRenderer extends GameRenderer {

    draw() {

        this.drawGrid();

        let context = this.getContext().getRenderingContext();

        let spaceship = this.getContext().getGameEnvironment().getGameEntities().getRenderableGameEntity( 'spaceship' );
        let spaceship2 = this.getContext().getGameEnvironment().getGameEntities().getRenderableGameEntity( 'spaceship2' );

        spaceship.render( context );
        spaceship2.render( context );
    }
}
