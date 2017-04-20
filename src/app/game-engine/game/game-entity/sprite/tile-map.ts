import { RenderableImageGameEntity } from "./renderable-image-game-entity";
import { isNull } from "util";
/**
 * A "map", typically used as a background, which is composed of cells from a spritesheet
 */
export class TileMap extends RenderableImageGameEntity {

    /**
     * @var spriteSheetName : string  The name of the spritesheet
     */
    private spriteSheetName : string;

    /**
     * @var tileMap
     *
     * The "map" (2 dimensional array)  of tiles.  Each element has a cell ID (+1) in it, which is used to recall which
     * image segment to display at the given row/column.  1st element is row, 2nd element is column.
     */
    private tileMap : number[][];

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
    public constructor( tilesArray : number[][], tileWidth : number = 32, tileHeight : number = 32 ) {

        super();

        this.tilesWide = tilesArray[0].length;
        this.tilesHigh = tilesArray.length;

        this.tileWidth = tileWidth;
        this.tileHeight = tileHeight;
    }

    public loadSpriteSheet( name, image, cellsWide, cellsHigh ) {

        this.spriteSheetName = name;

        RenderableImageGameEntity.addSpriteSheet( name, image, cellsWide, cellsHigh );
    }

    public loadTileMap( tiles : number[][] ) {

        this.tileMap = tiles;
    }

    public render( context : CanvasRenderingContext2D ) {

        let columns = this.tileMap;
        let SELF = this;

        context.save();
        context.setTransform( 1, 0, 0, 1, 0, 0 );
        context.translate( this.position.x, this.position.y );

        // Paint each cell on the map
        columns.forEach( function( row : number[], columnID ) {

            row.forEach( function( cellID : number, rowID ) {

                let sourcePosition = RenderableImageGameEntity.getSourceImageCellTopLeft( this.spriteSheetName, cellID );
                let sourceDimensions = RenderableImageGameEntity.getCellDimensions( this.spriteSheetName );

                context.drawImage(
                    RenderableImageGameEntity.getSpriteSheetAsset( this.spriteSheetName ),
                    sourcePosition.x, sourcePosition.y,
                    sourceDimensions.x, sourceDimensions.y,
                    ( columnID - 1 ) * SELF.tileWidth, ( rowID - 1 ) * SELF.tileHeight,
                    SELF.tileWidth, SELF.tileHeight
                );

            });
        });

        context.restore();
    }

}
