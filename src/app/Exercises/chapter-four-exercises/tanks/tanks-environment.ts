import { GameEnvironment } from "../../../game-engine/game/game-environment/game-environment";
import { TileMap } from "../../../game-engine/game/game-entity/game-tile/tile-map/tile-map";
import { TileMapLoader } from "../../../game-engine/game/game-entity/game-tile/tile-map/tile-map-loader";
import { Tank } from "./entity/tank";
import { TileFriendlyGameEntity } from "../../../game-engine/game/game-entity/sprite/tile-friendly-game-entity";
import { SpriteState } from "../../../game-engine/game/game-entity/sprite/sprite-state";
import { DefaultGameController } from "../../../game-engine/game/game-controller/default-game-controller";
export class TanksEnvironment extends GameEnvironment {

    public map : TileMap;
    private mapLoader : TileMapLoader;
    private controller1 : DefaultGameController;

    init() {

        this.mapLoader = new TileMapLoader( this.getGame() );
        this.mapLoader.loadMap( '/assets/tilemap/tanks-l1.tmx', 8, 4 );

        let tank = new Tank();
        tank.getSpriteStates().setSpriteState( 'moving', new SpriteState( 'tanks_sheet.png', 1, 9 ) );
        tank.getSpriteStates().setSpriteState( 'still', new SpriteState( 'tanks_sheet.png', 1, 1 ) );
        tank.setPositionAndSize( 48, 48, 32, 32 );
        tank.setCurrentSpriteState( 'moving' );

        this.controller1 = new DefaultGameController( this.getGame() );
        this.controller1.init();

        this.getGameEntities().setGameEntity( 'tank1', tank );
    }

    update() {

        if ( this.mapLoader.isMapLoaded() && ! this.map ) {

            this.map = this.mapLoader.getMap();
        }

        let tank = <TileFriendlyGameEntity> this.getGameEntities().getGameEntity( 'tank1' );
        let moving = false;
        tank.update();

        if ( this.controller1.isLeftDepressed() ) {

            tank.setRotation( tank.getRotation() - 1 );
        }

        if ( this.controller1.isRightDepressed() ) {

            tank.setRotation( tank.getRotation() + 1 );
        }

        if ( this.controller1.isUpDepressed() ) {

            tank.setCurrentSpriteState( 'moving' );
            moving = true;
        }

        if ( this.controller1.isDownDepressed() ) {

            tank.setCurrentSpriteState( 'moving' );
            moving = true;
        }

        if ( moving ) {
            tank.setCurrentSpriteState( 'moving' );
        } else {
            tank.setCurrentSpriteState( 'still' );
        }
    }
}
