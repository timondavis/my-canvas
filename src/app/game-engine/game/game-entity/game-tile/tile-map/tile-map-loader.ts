import { Game } from "../../../game";
import { TileMap } from "./tile-map";
import { SpriteState } from "../../sprite/sprite-state";
import { GameTile } from "../game-tile";
/**
 * Loads tile maps from the Tiled program
 */
export class TileMapLoader {

    private loaded : boolean = false;
    private mapData : any;
    private mapTiles : GameTile[][];
    private map : TileMap;

    public constructor( private game : Game ) {
    }

    public loadMap( url : string, spriteSheetCellsWide : number , spriteSheetCellsHigh : number ) : void {

        this.parseFile( url, spriteSheetCellsWide, spriteSheetCellsHigh );
    }

    public getMap() {

        if ( this.loaded ) {

            return this.map;
        }
    }

    public isMapLoaded() {

        return this.loaded;
    }

    private parseFile( url : string, spriteSheetCellsWide : number , spriteSheetCellsHigh : number ) : void {

        let SELF = this;

        this.game.getHttp().get( url ).subscribe( ( response ) => {

            let xml2js = require( 'xml2js' );

            xml2js.parseString( response.text(), function ( err, result ) {


                SELF.mapData = result;

                let spriteSheetName = result[ 'map' ][ 'tileset' ][ '0' ][ 'image' ][ '0' ][ '$' ][ 'source' ];
                let spriteSheetImage = SpriteState.loadSpriteSheetImage( '/assets/spritesheet/' + spriteSheetName );
                GameTile.addSpriteSheet( spriteSheetName, spriteSheetImage,
                    spriteSheetCellsWide, spriteSheetCellsHigh );

                let csv = require( 'csv-string' );

                let layerFrames = result[ "map" ][ "layer" ][ "0" ][ "data" ][ "0" ][ "_" ];
                layerFrames = layerFrames.replace( /\r?\n|\r/g, '' );

                let frames = csv.parse( layerFrames );

                SELF.convertFramesToDefaultTiles( result["map"], frames[0] );

                SELF.map = SELF.createNewTileMap();

                SELF.loaded = true;
            });
        } );
    }

    /**
     * Capture metadata about the map from the map file
     * @param metadata
     */
    private loadMapMetadata() {

    }

    /**
     * Convert all frames to corresponding and ready-to-animate map tiles
     * @param mapMetaData
     * @param frames
     */
    private convertFramesToDefaultTiles( mapMetaData : any, frames : number[] ) {

        let row : number;
        let column : number;

        this.mapTiles = [];

        let spriteSheetName = mapMetaData[ 'tileset' ][ '0' ][ 'image' ]['0'][ '$' ][ 'source' ];

        for ( row = 0; row < mapMetaData['$'].height ; row++ )  {

            this.mapTiles[ row ] = [];

            for ( column = 0; column < mapMetaData['$'].width ; column++ ) {

                let frameIndex = mapMetaData['$'].width * row + column;

                let gameTile = new GameTile();
                let gameTileState = new SpriteState(
                    spriteSheetName,
                    frames[ frameIndex ] - 1,
                    frames[ frameIndex ] - 1
                );

                gameTile.getSpriteStates().setSpriteState( 'default', gameTileState );
                gameTile.setCurrentSpriteState( 'default' );

                this.mapTiles[ row ][ column ] = gameTile;
            }
        }
    }

    private createNewTileMap() : TileMap {


        let mapMetaData = this.mapData[ 'map' ][ '$' ];

        let map = new TileMap( this.mapTiles );

        return map;
    }

}
