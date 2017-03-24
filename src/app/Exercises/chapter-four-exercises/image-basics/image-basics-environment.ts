import { GameEnvironment } from "../../../game-engine/game-environment";
import { SpaceshipGameEntity } from "./game-entities/spaceship-game-entity";
export class ImageBasicsEnvironment extends GameEnvironment {
    init() {

        let spaceship = new SpaceshipGameEntity();
        let spaceshipImage = new Image();
        spaceshipImage.src = '/assets/ship1.png';
        spaceship.setImage( spaceshipImage );

        this.getEntities().setGameEntity( 'spaceship', spaceship );
    }

    update() {
    }
}
