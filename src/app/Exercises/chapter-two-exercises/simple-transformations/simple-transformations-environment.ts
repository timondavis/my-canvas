import { GameEnvironment } from "../../../game-engine/game-environment";
import { Square } from "./game-object/square";
import { DefaultGameController } from "../../../game-engine/library/default-game-controller";
export class SimpleTransformationsEnvironment extends GameEnvironment {

    public s1 : Square;
    public s2 : Square;
    public s3 : Square;
    public s4 : Square;

    init() {

        this.s1 = new Square();
        this.s1.x = 150;
        this.s1.y = 100;
        this.s1.color = "red";

        this.s2 = new Square();
        this.s2.x = 300;
        this.s2.y = 100;
        this.s2.color = "blue";
        this.s2.rotation = 11.25;
        this.s2.rotationSpeed = 4;

        this.s3 = new Square();
        this.s3.x = 450;
        this.s3.y = 100;
        this.s3.color = "yellow";
        this.s3.rotation = 22.5
        this.s3.rotationSpeed = 8;

        this.s4 = new Square();
        this.s4.x = 600;
        this.s4.y = 100;
        this.s4.color = "purple";
        this.s4.rotation = 33.75;
        this.s4.rotationSpeed = 16;
    }

    update() {

        let controller = <DefaultGameController> this.context.getGameController();

        this.s1.update();
        this.s2.update();
        this.s3.update();
        this.s4.update();

        if ( controller.isLeftDepressed() ) { this.s4.rotationSpeed -= 0.05; }
        if ( controller.isRightDepressed() ) { this.s4.rotationSpeed += 0.05; }
        if ( controller.isUpDepressed() ) { this.s4.y -= 0.2; }
        if ( controller.isDownDepressed() ) { this.s4.y += 0.2; }
    }
}
