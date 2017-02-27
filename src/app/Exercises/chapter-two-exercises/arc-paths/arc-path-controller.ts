import { GameController } from "../../../game-engine/game-controller";
import { Debugger } from "../../../game-engine/debugger";
export class ArcPathController extends GameController {

    private firstKeys : ArcControllerKeys;
    private secondKeys : ArcControllerKeys;
    private radiusKeys : ArcControllerKeys;

    init() {

        let self = this;

        this.firstKeys = new ArcControllerKeys();
        this.secondKeys = new ArcControllerKeys();
        this.radiusKeys = new ArcControllerKeys();

        this.context.getInputObserver().keyPressed.subscribe( function( event ) {

            let key = event.key.toLowerCase();

            switch( key ) {

                case( 'w' ) : { self.firstKeys.up = true; break;  }
                case( 'd' ) : { self.firstKeys.right = true; break; }
                case( 's' ) : { self.firstKeys.down = true; break; }
                case( 'a' ) : { self.firstKeys.left = true; break; }

                case( 'k' ) : { self.secondKeys.up = true; break; }
                case( 'l' ) : { self.secondKeys.right = true; break; }
                case( 'j' ) : { self.secondKeys.down = true; break; }
                case( 'h' ) : { self.secondKeys.left = true; break; }

                case( '1' ) : { self.radiusKeys.up = true; break; }
                case( '0' ) : { self.radiusKeys.down = true; break; }
                default: break;
            }

        },
            (err) => Debugger.log( err )
        );


        this.context.getInputObserver().keyReleased.subscribe( function( event ) {

            let key = event.key.toLowerCase();

            switch( key ) {

                case( 'w' ) : { self.firstKeys.up = false; break; }
                case( 'd' ) : { self.firstKeys.right = false; break; }
                case( 's' ) : { self.firstKeys.down = false; break; }
                case( 'a' ) : { self.firstKeys.left = false; break; }

                case( 'k' ) : { self.secondKeys.up = false; break; }
                case( 'l' ) : { self.secondKeys.right = false; break; }
                case( 'j' ) : { self.secondKeys.down = false; break; }
                case( 'h' ) : { self.secondKeys.left = false; break; }

                case( '1' ) : { self.radiusKeys.up = false; break; }
                case( '0' ) : { self.radiusKeys.down = false; break; }

                default: break;
            }
        },
            (err) => Debugger.log( err )
        );

    }

    public isFirstUpPressed() {
       return this.firstKeys.up;
    }

    public isFirstDownPressed() {
        return this.firstKeys.down;
    }

    public isFirstRightPressed() {
       return this.firstKeys.right;
    }

    public isFirstLeftPressed() {
        return this.firstKeys.left;
    }

    public isSecondUpPressed() {
        return this.secondKeys.up;
    }

    public isSecondDownPressed() {
        return this.secondKeys.down;
    }

    public isSecondRightPressed() {
        return this.secondKeys.right;
    }

    public isSecondLeftPressed() {
        return this.secondKeys.left;
    }

    public isRadiusUpPressed() {
        return this.radiusKeys.up;
    }

    public isRadiusDownPressed() {
        return this.radiusKeys.down;
    }
}

class ArcControllerKeys {

    public up : boolean = false;
    public down : boolean = false;
    public right : boolean = false;
    public left : boolean = false;

    public areAnyKeysPressed() {

        return ( this.up || this.down || this.right || this.left );
    }

}
