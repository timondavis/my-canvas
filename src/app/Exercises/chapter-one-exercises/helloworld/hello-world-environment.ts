import { GameEnvironment } from "../../../game-engine/game-environment";
import { Debugger } from "../../../game-engine/debugger";
import { HelloWorldController } from "./hello-world-controller";

export class HelloWorldEnvironment extends GameEnvironment {


    public update() {

        let controller = <HelloWorldController> this.context.getGameController();

        if ( controller.isSpaceDepressed() ) { return; }

        if ( this.getDelta( 'fadeIn' )  ) {

            let alpha = this.getDelta( 'alpha' );

            alpha += .01;

            if ( alpha >= 1.0 ) {

                alpha = 1;
                this.setDelta( 'fadeIn', false );
            }

            this.setDelta( 'alpha', alpha );

        } else {

            let alpha = this.getDelta( 'alpha' );
            alpha -= .01;

            if ( alpha < 0 ) {

                alpha = 0;
                this.setDelta( 'fadeIn', true );
            }

            this.setDelta( 'alpha', alpha );
        }
    }

    public static getHTMLbg() {

       let img = new Image();
       img.src = "/assets/html5bg.jpg";

       return img;
    }

}
