import { RenderableImageGameEntity } from "../../../../game-engine/game-entity/renderable-image-game-entity";
import { SpriteState } from "../../../../game-engine/library/sprite/sprite-state";
import { DefaultGameController } from "../../../../game-engine/library/default-game-controller";
import { GameContext } from "../../../../game-engine/game-context";
import { Debugger } from "../../../../game-engine/debugger";
export class CharacterGameEntity extends RenderableImageGameEntity {

    public initialized = false;
    private context : GameContext;
    private controller : DefaultGameController;
    public direction = "up";

    public constructor ( context : GameContext ) {

        super();
        this.context = context;
    }

    public update() {

        let currentSpriteState = this.getCurrentSpriteState().getSpriteSheetName();

        Debugger.log( "Is Up depressed: " + this.controller.isUpDepressed() );

        switch ( this.direction ) {

            case( "up" ): {

                currentSpriteState = ( this.controller.isUpDepressed() ) ?
                    'character-up-walk' : 'character-up-walk';
                break;
            }

            case( "left" ):  {

                currentSpriteState = ( this.controller.isLeftDepressed() ) ?
                    'character-left-walk' : 'character-left-walk';
                break;
            }

            case ( "right" ): {

                currentSpriteState = ( this.controller.isRightDepressed() ) ?
                    'character-right-walk' : 'character-right-walk';
                break;
            }

            case ( "down" ):  {

                currentSpriteState = ( this.controller.isDownDepressed() ) ?
                    'character-down-walk' : 'character-down-walk';
                break;
            }

            default: break;
        }

        this.setCurrentSpriteState( currentSpriteState );

        this.advanceCell();
    }

    public init() {

        let SELF = this;

        if ( ! this.initialized ) {

            this.controller = new DefaultGameController( this.getContext() );

            // Register The Spritesheet
            let characterSheet = new Image();
            characterSheet.src = '/assets/test2.png';

            characterSheet.addEventListener( 'load', function() {
                SELF.assetsLoaded = true;
            });

            RenderableImageGameEntity.addSpriteSheet( 'character', characterSheet, 4, 4 );

            // Create Sprite States
            this.getSpriteStates().setSpriteState(
                'character-down-walk',
                new SpriteState( 'character', 0, 3 )
            );

            this.getSpriteStates().setSpriteState(
                'character-down-stand',
                new SpriteState( 'character', 0, 0 )
            );

            this.getSpriteStates().setSpriteState(
                'character-left-walk',
                new SpriteState( 'character', 4, 7 )
            );

            this.getSpriteStates().setSpriteState(
                'character-left-stand',
                new SpriteState( 'character', 4, 4 )
            );

            this.getSpriteStates().setSpriteState(
                'character-right-walk',
                new SpriteState( 'character', 8, 11 )
            );

            this.getSpriteStates().setSpriteState(
                'character-right-stand',
                new SpriteState( 'character', 8, 8 )
            );

            this.getSpriteStates().setSpriteState(
                'character-up-walk',
                new SpriteState( 'character', 12, 15 )
            );

            this.getSpriteStates().setSpriteState(
                'character-up-stand',
                new SpriteState( 'character', 12, 12 )
            );

            // Set current direction to up.
            this.setCurrentSpriteState( 'character-up-walk' );

            this.getContext().getInputObserver().keyPressed.subscribe(

                ( event ) => {
                    if ( SELF.controller.isUpDepressed() ) {

                        this.direction = "up";
                    }

                    if ( SELF.controller.isLeftDepressed() ) {

                        this.direction = "left";
                    }

                    if ( SELF.controller.isRightDepressed() ) {

                        this.direction = "right";
                    }

                    if (SELF.controller.isDownDepressed() ) {

                       this.direction = "down";
                    }
                },
                ( err ) => { throw err }
            );


            this.initialized = true;
        }

    }

    private getContext() : GameContext {

        return this.context;
    }

}
