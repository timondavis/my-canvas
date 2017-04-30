import { GameRenderer } from "../../../game-engine/game/game-renderer/game-renderer";
import { TanksEnvironment } from "./tanks-environment";
export class TanksRenderer extends GameRenderer {
    draw() {

        let environment = <TanksEnvironment> this.getGame().getGameEnvironment();
        let context = this.getGame().getRenderingContext();

        environment.map.render( context );
    }
}
