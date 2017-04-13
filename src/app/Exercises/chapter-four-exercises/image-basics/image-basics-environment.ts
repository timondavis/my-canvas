import { GameEnvironment } from "../../../game-engine/game-environment";
import { SpaceshipGameEntity } from "./game-entities/spaceship-game-entity";
export class ImageBasicsEnvironment extends GameEnvironment {
    init() {

        let spaceship = new SpaceshipGameEntity();
        let spaceshipImage = new Image();
        spaceshipImage.src = '/assets/ship1.png';
        spaceship.setImage( spaceshipImage );

        this.getGameEntities().setGameEntity( 'spaceship', spaceship );

        spaceship.setPositionAndSize( 10, 10, 50, 50 );

        let spaceship2 = new SpaceshipGameEntity();
        spaceship2.setImage( new Image() );
        spaceship2.getImage().src = '/assets/ship1.png';

        this.getGameEntities().setGameEntity( 'spaceship2', spaceship2 );

        spaceship2.setPositionAndSize( 200, 200, 100, 100 );
    }

    update() {
    }
}
