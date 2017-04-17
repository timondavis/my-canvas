import { CharacterGameEntity } from "./game-entities/character-game-entity";
import { GameEnvironment } from "../../../game-engine/game/game-environment/game-environment";
import { DefaultGameController } from "../../../game-engine/game/game-controller/default-game-controller";
export class ImageBasicsEnvironment extends GameEnvironment {

    private expand = true;
    private size = 1.0;
    private controller : DefaultGameController;

    init() {

        /*let spaceship = new SpaceshipGameEntity();
        spaceship.init();
        this.getGameEntities().setGameEntity( 'spaceship', spaceship );

        spaceship.setPosition( 20, 20 );
        spaceship.setWidth( 50 );
        spaceship.setHeight( 50 );*/

        let barry = new CharacterGameEntity( this.getGame() );
        barry.init();
        this.getGameEntities().setGameEntity( 'barry', barry );

        barry.setPosition( 200, 200 );
        barry.setWidth( 50 );
        barry.setHeight( 100 );

        this.controller = new DefaultGameController( this.getGame() );

    }

    update() {

        if ( this.expand ) {

            this.size += 0.01;

            if ( this.size > 2.0 ) { this.expand = false; }
        } else {

            this.size -= 0.01;
            if ( this.size < 0.5 ) { this.expand = true; }
        }

        /*
            let spaceship = this.getGameEntities().getRenderableGameEntity( 'spaceship' );

            spaceship.setWidth ( 50 * this.size );
            spaceship.setHeight ( 50 * this.size );
        */

        this.getGameEntities().forEach( function ( value ) {

            value.update();
        });
    }
}
