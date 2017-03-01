import { GameEnvironment } from "../../../game-engine/game-environment";
import { Point } from "../../../game-engine/library/point";
import { BezierPathsController } from "./bezier-paths-controller";
export class BezierPathsEnvironment extends GameEnvironment{

    public p1 : Point;
    public p2 : Point;

    public loopTime : number;

    init() {

        this.p1 = new Point( 150, 225 );
        this.p2 = new Point( 375, 275 );

        this.loopTime = 20;
    }

    update() {

        let ctl = <BezierPathsController> this.context.getGameController();

        if ( ctl.isFirstDownPressed() )     { this.p1.y += 5; }
        if ( ctl.isFirstUpPressed() )       { this.p1.y -= 5; }
        if ( ctl.isFirstRightPressed() )    { this.p1.x += 5; }
        if ( ctl.isFirstLeftPressed() )     { this.p1.x -= 5; }

        if ( ctl.isSecondDownPressed() )    { this.p2.y += 5; }
        if ( ctl.isSecondUpPressed() )      { this.p2.y -= 5; }
        if ( ctl.isSecondRightPressed() )   { this.p2.x += 5; }
        if ( ctl.isSecondLeftPressed() )    { this.p2.x -= 5; }
    }
}
