import { GameEnvironment } from "../../../game-engine/game-environment";
export class CanvasClearingEnvironment extends GameEnvironment {

    public yOffset : number;

    init() {

        this.yOffset = 0;
    }

    update() {

        this.yOffset += 1;
    }
}
