import { GameRenderer } from "../../../game-engine/game-renderer";
import { RenderableGameEntity } from "../../../game-engine/game-entity/renderable-game-entity";
export class ImageBasicsRenderer extends GameRenderer {

    draw() {

        this.drawGrid();

        let context = this.getGame().getRenderingContext();

        let env = this.getGame().getGameEnvironment();

        let entities = env.getGameEntities().getCollection();

        entities.forEach( function( value ) {

            if ( value instanceof RenderableGameEntity ) {

                value.render( context );
            }
        });
    }
}
