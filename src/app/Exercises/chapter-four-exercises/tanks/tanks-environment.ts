import { GameEnvironment } from "../../../game-engine/game/game-environment/game-environment";
import { TileMap } from "../../../game-engine/game/game-entity/game-tile/tile-map/tile-map";
import { TileMapLoader } from "../../../game-engine/game/game-entity/game-tile/tile-map/tile-map-loader";
export class TanksEnvironment extends GameEnvironment {

    public map : TileMap;
    private mapLoader : TileMapLoader;

    init() {

        this.mapLoader = new TileMapLoader( this.getGame() );
        this.mapLoader.loadMap( '/assets/tilemap/tanks-l1.tmx', 8, 4 );

    }

    update() {

        if ( this.mapLoader.isMapLoaded() && ! this.map ) {

            this.map = this.mapLoader.getMap();
        }
    }
}
