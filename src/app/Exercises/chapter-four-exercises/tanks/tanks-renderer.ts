import { GameRenderer } from "../../../game-engine/game/game-renderer/game-renderer";
import { TanksEnvironment } from "./tanks-environment";
export class TanksRenderer extends GameRenderer {
    draw() {

        let environment = <TanksEnvironment> this.getGame().getGameEnvironment();
        let context = this.getGame().getRenderingContext();

        this.clear();

        this.drawGrid();

        environment.map.render( context );

        environment.getGameEntities().forEach( function( entity )  {

            entity.renderOntoTileMap( context, environment.map );
        });
    }
}
