import { GameEnvironment } from "../../../game-engine/game-environment";
import { ArcPathController } from "./arc-path-controller";
import { Debugger } from "../../../game-engine/debugger";
export class ArcPathEnvironment extends GameEnvironment {


    public x1 : number = 650;
    public y1 : number = 550;
    public x2 : number = 400;
    public y2 : number = 200;

    public radius : number = 20;

    public loopWaitTime : number = 20;

    init() {

        this.context.getGameController().init();
    }

    update() {

        let controller = <ArcPathController> this.context.getGameController();

        if ( controller.isFirstUpPressed() ) { this.y1 += 5; }
        if ( controller.isFirstDownPressed() ) { this.y1 -= 5; }

        if ( controller.isFirstLeftPressed() ) { this.x1 -= 5; }
        if ( controller.isFirstRightPressed() ) { this.x1 += 5; }

        if ( controller.isSecondUpPressed() ) { this.y2 += 5; }
        if ( controller.isSecondDownPressed() ) { this.y2 -= 5; }

        if ( controller.isSecondLeftPressed() ) { this.x2 -= 5; }
        if ( controller.isSecondRightPressed() ) { this.x2 += 5; }

        if ( controller.isRadiusDownPressed() ) { this.radius -= 2; }
        if ( controller.isRadiusUpPressed() ) { this.radius += 2; }
    }
}
