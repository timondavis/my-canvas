import { GameRenderer } from "../../../game-engine/game/game-renderer/game-renderer";
import { RenderableGameEntity } from "../../../game-engine/game/game-entity/renderable-game-entity";
export class ImageBasicsRenderer extends GameRenderer {

    draw() {

        this.drawGrid();

        let context = this.getGame().getRenderingContext();

        let env = this.getGame().getGameEnvironment();

        env.getGameEntities().forEach( function( value ) {

            if ( value instanceof RenderableGameEntity ) {

                value.render( context );
            }
        });
    }
}
