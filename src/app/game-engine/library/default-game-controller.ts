import { EventEmitter } from "@angular/core";
import { GameController } from "../game-controller";
import { Debugger } from "../debugger";
import { Game } from "../game";
export class DefaultGameController extends GameController {

    public buttonStateChange : EventEmitter<any>;
    private keys : DefaultControllerKeys;

    public constructor( game : Game ) {
       super( game );

        let self = this;

        this.keys = new DefaultControllerKeys();
        this.buttonStateChange = new EventEmitter<any>();

        this.getGame().getInputObserver().keyPressed.subscribe( function( event ) {

                let key = event.key.toLowerCase();

                switch( key ) {

                    case( 'w' ) : { self.keys.up    = self.processButtonStateChange( 'up', true ); break; }
                    case( 'a' ) : { self.keys.left  = self.processButtonStateChange( 'left', true ); break; }
                    case( 's' ) : { self.keys.down  = self.processButtonStateChange( 'down', true ); break; }
                    case( 'd' ) : { self.keys.right = self.processButtonStateChange( 'right', true ); break; }

                    default: break;
                }

            },
            (err) => Debugger.log( err )
        );

        this.getGame().getInputObserver().keyReleased.subscribe( function( event ) {

                let key = event.key.toLowerCase();

                switch( key ) {

                    case( 'w' ) : { self.keys.up    = self.processButtonStateChange( 'up', false ); break; }
                    case( 'a' ) : { self.keys.left  = self.processButtonStateChange( 'left', false ); break; }
                    case( 's' ) : { self.keys.down  = self.processButtonStateChange( 'down', false ); break; }
                    case( 'd' ) : { self.keys.right = self.processButtonStateChange( 'right', false ); break; }

                    default: break;
                }

            },
            (err) => Debugger.log( err )
        );

    }

    init() {


    }

    /**
     * Emits a key value pair to the buttonStateChange observers.  Returns value.
     *
     * meant to be used something like...
     *
     * self.keys.left = processButtonStateChange( 'leftButton', true );
     *
     * @param key
     * @param value
     *
     * @return : any
     */
    private processButtonStateChange( key : any,  value : any ) {

        this.buttonStateChange.emit( { 'key' : key, 'value' : value } );
        return value;
    }

    public isUpDepressed() {
        return this.keys.up;
    }

    public isLeftDepressed() {
        return this.keys.left;
    }

    public isDownDepressed() {
        return this.keys.down;
    }

    public isRightDepressed() {
        return this.keys.right;
    }

}

class DefaultControllerKeys {

    public up : boolean = false;
    public down : boolean = false;
    public right : boolean = false;
    public left : boolean = false;

    public areAnyKeysPressed() {

        return ( this.up || this.down || this.right || this.left );
    }

}
