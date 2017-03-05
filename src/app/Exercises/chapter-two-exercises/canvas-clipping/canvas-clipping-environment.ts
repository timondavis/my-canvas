import { GameEnvironment } from "../../../game-engine/game-environment";
import { DefaultGameController } from "../../../game-engine/library/default-game-controller";
import { Debugger } from "../../../game-engine/debugger";
export class CanvasClippingEnvironment extends GameEnvironment {

    public clippingOn : boolean = true;
    public blueAlpha;
    private blueAlphaAscending;
    private isClippingButtonLocked : boolean = false;


    init() {

        let controller = <DefaultGameController> this.context.getGameController();
        let self = this;

        this.blueAlpha = 1.0;
        this.blueAlphaAscending = false;

        controller.buttonStateChange.subscribe(

            function( response ) {

                if ( response.key == 'left' && response.value == false) {
                    self.isClippingButtonLocked = false;
                }
            },
            (err) => Debugger.log( err )
        );

    }

    update() {

        let self = this;
        let controller = <DefaultGameController> self.context.getGameController();

        if ( ! self.isClippingButtonLocked ) {
            if ( controller.isDownDepressed() ) {
                self.clippingOn = !this.clippingOn;
                self.isClippingButtonLocked = true;
            }
        }

        this.regulateBlueAlpha();

    }

    private regulateBlueAlpha() {

        this.blueAlpha += ( this.blueAlphaAscending ) ? 0.01 : -0.01;

        if ( 1.0 <= this.blueAlpha ) {
            this.blueAlphaAscending = false;
        }
        if ( -1.0 >= this.blueAlpha ) {
            this.blueAlphaAscending = true;
        }
   }
}
