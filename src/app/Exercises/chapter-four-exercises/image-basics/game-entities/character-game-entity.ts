import { Debugger } from "../../../../game-engine/library/debugger";
import { RenderableImageGameEntity } from "../../../../game-engine/game/game-entity/sprite/renderable-image-game-entity";
import { Game } from "../../../../game-engine/game/game";
import { DefaultGameController } from "../../../../game-engine/game/game-controller/default-game-controller";
import { SpriteState } from "../../../../game-engine/game/game-entity/sprite/sprite-state";
export class CharacterGameEntity extends RenderableImageGameEntity {

    public initialized = false;
    private game : Game;
    private controller : DefaultGameController;
    public direction = "up";

    public constructor ( game : Game ) {

        super();
        this.game = game;
    }

    public update() {

        let newSpriteStateName = this.getCurrentSpriteStateName();

        Debugger.log( "Is Up depressed: " + this.controller.isUpDepressed() );

        switch ( this.direction ) {

            case( "up" ): {

                if ( this.controller.isUpDepressed() ) {

                    newSpriteStateName = 'character-up-walk';
                    this.setPosition( this.getPosition().x, this.getPosition().y - 7 );
                } else {

                    newSpriteStateName = 'character-up-stand';
                }

                break;
            }

            case( "left" ):  {

                if ( this.controller.isLeftDepressed() ) {

                    newSpriteStateName = 'character-left-walk';
                    this.setPosition( this.getPosition().x - 7, this.getPosition().y );
                } else {

                    newSpriteStateName = 'character-left-stand';
                }

                break;
            }

            case ( "right" ): {

                if ( this.controller.isRightDepressed() ) {

                    newSpriteStateName = 'character-right-walk';
                    this.setPosition( this.getPosition().x + 7, this.getPosition().y );
                } else {

                    newSpriteStateName = 'character-right-stand';
                }
                break;
            }

            case ( "down" ):  {

                if ( this.controller.isDownDepressed() ) {

                   newSpriteStateName = 'character-down-walk';
                   this.setPosition( this.getPosition().x, this.getPosition().y + 7 );
                } else {

                    newSpriteStateName = 'character-down-stand';
                }
                break;
            }

            default: break;
        }

        // Change the current sprite state only if a change is called for
        if ( newSpriteStateName && this.getSpriteStates().getSpriteState(newSpriteStateName) != this.getCurrentSpriteState() ) {
            this.setCurrentSpriteState( newSpriteStateName );
        }

        this.advanceCell();
    }

    public init() {

        let SELF = this;

        if ( ! this.initialized ) {

            this.controller = new DefaultGameController( this.getGame() );

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

            this.getGame().getInputObserver().keyPressed.subscribe(

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

    private getGame() : Game {

        return this.game;
    }

}
