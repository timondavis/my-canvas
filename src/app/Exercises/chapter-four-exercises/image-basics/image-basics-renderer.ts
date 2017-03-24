import { GameRenderer } from "../../../game-engine/game-renderer";
export class ImageBasicsRenderer extends GameRenderer {

    draw() {

        this.drawGrid();

        let context = this.getContext().getRenderingContext();

        let spaceship = this.getContext().getGameEnvironment().getEntities().getRenderableGameEntity( 'spaceship' );

        spaceship.render( context );
    }
}
