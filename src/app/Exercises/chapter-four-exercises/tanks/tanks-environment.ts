import { GameEnvironment } from "../../../game-engine/game/game-environment/game-environment";
import { TileMapLoader } from "../../../game-engine/game/game-entity/sprite/tile-map/tile-map-loader";
import { TileMap } from "../../../game-engine/game/game-entity/sprite/tile-map/tile-map";
export class TanksEnvironment extends GameEnvironment {

    public map : TileMap;
    private mapLoader : TileMapLoader;

    init() {

        this.mapLoader = new TileMapLoader( this.getGame() );
        this.mapLoader.loadFromUrl( '/assets/tilemap/tanks-l1.tmx' );

    }

    update() {

        if ( this.mapLoader.isMapLoaded() && ! this.map ) {

            this.map = this.mapLoader.getMap();
        }
    }
}
