import { GameRenderer } from "../../../game-engine/game-renderer";
import { RenderableGameEntity } from "../../../game-engine/game-entity/renderable-game-entity";
export class ImageBasicsRenderer extends GameRenderer {

    draw() {

        this.drawGrid();

        let context = this.getContext().getRenderingContext();

        let env = this.getContext().getGameEnvironment();

        let entities = env.getGameEntities().getCollection();

        entities.forEach( function( value ) {

            if ( value instanceof RenderableGameEntity ) {

                value.render( context );
            }
        });
    }
}
