import { GameEnvironment } from "../../../game-engine/game-environment";
import { SpaceshipGameEntity } from "./game-entities/spaceship-game-entity";
import { forEach } from "@angular/router/src/utils/collection";
import { RenderableImageGameEntity } from "../../../game-engine/game-entity/renderable-image-game-entity";
export class ImageBasicsEnvironment extends GameEnvironment {

    private expand = true;
    private size = 1.0;

    init() {

        let spaceship = new SpaceshipGameEntity();
        spaceship.init();
        this.getGameEntities().setGameEntity( 'spaceship', spaceship );

        spaceship.setPosition( 20, 20 );
        spaceship.setWidth( 50 );
        spaceship.setHeight( 50 );
    }

    update() {

        if ( this.expand ) {

            this.size += 0.01;

            if ( this.size > 2.0 ) { this.expand = false; }
        } else {

            this.size -= 0.01;
            if ( this.size < 0.5 ) { this.expand = true; }
        }

        let spaceship = this.getGameEntities().getRenderableGameEntity( 'spaceship' );

        spaceship.setWidth ( 50 * this.size );
        spaceship.setHeight ( 50 * this.size );

        this.getGameEntities().getCollection().forEach( function ( value, key ) {

            value.update();
        });
    }
}
