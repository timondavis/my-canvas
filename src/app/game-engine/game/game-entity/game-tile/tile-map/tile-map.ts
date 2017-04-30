import { RenderableImageGameEntity } from "../../sprite/renderable-image-game-entity";
import { GameTile } from "../game-tile";
import { Point } from "../../../../library/graph/point";
/**
 * A "map", typically used as a background, which is composed of cells from a spritesheet
 *
 * The position indicates the root of the map, ie its position of the top-left pixel of it.
 */
export class TileMap extends RenderableImageGameEntity {

    /**
     * @var tileMap
     *
     * The "map" (2 dimensional array)  of tiles.  Each element has a cell ID (+1) in it, which is used to recall which
     * image segment to display at the given row/column.  1st element is row, 2nd element is column.
     */
    private tileMap : GameTile[][];

    /** @var tilesWide : number  The number of tiles in each row **/
    private tilesWide : number;

    /** @var tilesHigh : number  The number of tiles in each column **/
    private tilesHigh : number;

    /** @var tileWidth : number  The width, in pixels, in each tile **/
    private tileWidth : number;

    /** @var tileHeight : number  The height, in pixels, in each tile **/
    private tileHeight : number;

    /**
     * Create a new tile map.  You must define how many cells wide, high the map is to instantiate.
     *
     * @param tilesArray : number[][]  A 2 dimensional array containing cell IDs to go with a spritesheet
     * @param tileWidth : number  The width, in pixels, of each tile
     * @param tileHeight : number  The height, in pixels, of each tile
     */
    public constructor( tilesArray : GameTile[][], tileWidth : number = 32, tileHeight : number = 32 ) {

        super();

        this.tilesWide = tilesArray[0].length;
        this.tilesHigh = tilesArray.length;

        this.tileWidth = tileWidth;
        this.tileHeight = tileHeight;

        this.tileMap = tilesArray;

        this.setTileDimensions( tileWidth, tileHeight );
    }

    /**
     * Set the width and height of each tile on the map
     *
     * @param width
     * @param height
     */
    public setTileDimensions( width : number, height : number ) {

        this.tileMap.forEach( function( row : GameTile[] , columnID ) {

            row.forEach( function( tile : GameTile, rowID )  {

                tile.setWidth( width );
                tile.setHeight( height );
            });
        });

    }

    /**
     * Render the tile map
     *
     * @param context
     */
    public render( context : CanvasRenderingContext2D ) {

        let SELF = this;

        let columns = this.tileMap;

        context.save();
        context.setTransform( 1, 0, 0, 1, 0, 0 );
        context.translate( this.position.x, this.position.y );

        // Paint each cell on the map
        columns.forEach( function( row : GameTile[], rowID ) {

            row.forEach( function( tile : GameTile, columnID ) {

                tile.setXPosition( SELF.tileWidth * columnID );
                tile.setYPosition( SELF.tileHeight * rowID );

                tile.renderFromSpriteCell( context );
            });
        });

        context.restore();
    }

}
