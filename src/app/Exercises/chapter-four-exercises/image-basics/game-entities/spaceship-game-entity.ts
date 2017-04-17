
import { RenderableImageGameEntity } from "../../../../game-engine/game/game-entity/sprite/renderable-image-game-entity";
import { SpriteState } from "../../../../game-engine/game/game-entity/sprite/sprite-state";
export class SpaceshipGameEntity extends RenderableImageGameEntity{

    public static initialized : boolean = false;

    public constructor() {

        super();
        this.init();
    }

    public init() {

        let SELF = this;

        if ( ! SpaceshipGameEntity.initialized ) {

            // Create spritesheets
            let spaceshipImage = new Image();
            spaceshipImage.src = '/assets/ship1.png';

            // Add load listener to the spritesheet
            spaceshipImage.addEventListener( 'load', function( event ) {

                SELF.assetsLoaded = true;
            });

            RenderableImageGameEntity.setSpriteSheetAsset( 'spaceship', spaceshipImage );

            // Create sprite states
            let stillState: SpriteState = new SpriteState( 'spaceship', 0, 0 );

            // Add the sprite state and set to current
            this.getSpriteStates().setSpriteState( 'still', stillState );
            this.setCurrentSpriteState( 'still' );

            SpaceshipGameEntity.initialized = true;
        }
    }

}
