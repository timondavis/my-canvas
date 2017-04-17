import { isNull } from "util";
import { SpriteState } from "../sprite/sprite-state";
export class SpriteStateCollection {

    /**
     * Sprite state collection
     */
    private spriteStates : Map<string, SpriteState>;

    /**
     * Create a new instance
     */
    public constructor() {

        this.spriteStates = new Map<string, SpriteState>();
    }

    /**
     * Execute a foreach loop, iterating over each sprite state in the collection
     * @param func : any callbackfn( value : SpriteState, key : string ) (
     */
    public forEach( func ) {

        this.spriteStates.forEach( func );
    }

    /**
     * Get a sprite state from the sprite state collection by name
     *
     * @param name : string
     * @returns {undefined|SpriteState}
     */
    public getSpriteState( name : string ) : SpriteState {

        let state =  this.spriteStates.get( name );

        if ( isNull( state ) ) {

            throw "Sprite State " + name + " was invoked but could not be found.";
        }

        return state;
    }

    /**
     * Set a sprite state and assign it a name.  Will overwrite any pre-existing sprite states assigned to the same
     * name.
     *
     * @param name : string
     * @param state : SpriteState
     */
    public setSpriteState( name : string, state : SpriteState ) : void {

        this.spriteStates.set( name, state );
    }
}
