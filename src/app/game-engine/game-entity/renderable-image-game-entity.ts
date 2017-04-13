import { RenderableGameEntity } from "./renderable-game-entity";
import { Point } from "../library/point";

export abstract class RenderableImageGameEntity extends RenderableGameEntity {

    /**
     * The name of the current sprite sheet being used for an instance of this class.
     *
     * @type {string}
     */
    protected currentSpriteSheet = "";

    /**
     * Store images for use by image renderable game entities
     *
     * @type {Map<string, any>}
     */
    private static spriteSheetLibrary : Map<string, any> = new Map<string, any>();

    /**
     * Store cells horizontal (x) and vertical (y) on a spriteSheet.
     *
     * @type {Map<string, Point>}
     */
    private static spriteSheetSizing : Map<string, Point> = new Map<string, Point>();

    /**
     * Define the current sprite sheet being used on this instance by name
     *
     * @param spriteSheetName : string
     */
    public setCurrentSpriteSheetName( spriteSheetName : string ) : void {

        this.currentSpriteSheet = spriteSheetName;
    }

    /**
     * Get the current sprite sheet being used on this instance by name
     *
     * @returns {string}
     */
    public getCurrentSpriteSheetName() : string  {

        return this.currentSpriteSheet;
    }

    public renderFromSpriteCell( cellID : number, context : CanvasRenderingContext2D ) {

        let spriteSheetName = this.getCurrentSpriteSheetName();

        let spriteSheet = RenderableImageGameEntity.getSpriteSheetAsset( spriteSheetName );
        let spriteSheetSize = RenderableImageGameEntity.getSpriteSheetSizing( spriteSheetName );

        // get # of cells on grid
        let cellRangeMax = spriteSheetSize.x * spriteSheetSize.y;

        // Validate - is the cell in range?
        if ( cellRangeMax <= cellID ) {

            throw( "Requested cell on " + spriteSheetName + " of ID " + cellID + " is not valid.  Cell ID out of" +
            " range.");
        }

        // Where will the source location be?
        let sourceLocation = RenderableImageGameEntity.getSourceImageCellTopLeft( spriteSheetName, cellID );
        let cellDimensions = RenderableImageGameEntity.getCellDimensions( spriteSheetName );

        // Draw out the image.
        context.drawImage( spriteSheet,
            sourceLocation.x, sourceLocation.y,
            cellDimensions.x, cellDimensions.y,
            this.position.x, this.position.y,
            this.width, this.height
        );
    }


    /**
     * Add an image to the image library for use by all game entities (you can load spriteSheets here, for example)
     *
     * @param name
     * @param image
     */
    public static addSpriteSheet( name : string, image : any, numberOfHorizontalCells : number = 1,
                                  numberOfVerticalCells : number = 1 ) {

        this.setSpriteSheetAsset( name, image );
        this.setSpriteSheetSizing( name, new Point( numberOfHorizontalCells, numberOfVerticalCells ) );
    }

    /**
     * Use this method to get the relative position (base 0 0) of the target cells destination top-left pixel.
     *
     * @param spriteSheetName : name   The name of the spritesheet being queried
     * @param cellID : number  The cell ID being queried
     * @returns {Point}
     */
    public static getSourceImageCellTopLeft( spriteSheetName : string, cellID : number ) : Point{

        if ( 0 == cellID ) { return new Point( 0, 0 ); }

        // Actual width / height, in pixels, of the cells
        let cellDimensions = this.getCellDimensions( spriteSheetName );
        let spriteSheetSize = this.getSpriteSheetSizing( spriteSheetName );

        // Colculate the row and the column.  Left shift both values by 1
        let row = Math.floor( cellID / spriteSheetSize.y );
        let column = ( spriteSheetSize.x % cellID) - 1 ;

        if ( column < 0 ) { column = spriteSheetSize.x }

        return new Point(
            column * cellDimensions.x,
            row    * cellDimensions.y
        );
    }

    /**
     * Use this method to determine the relative position, in pixels ( base 0 0 ) of the center of the target cell
     * @param spriteSheetName
     * @param cellID
     * @returns {Point}
     */
    public static getSourceImageCellCenter( spriteSheetName : string, cellID : number ) : Point {

        // Get initial starting point
        let startingPoint = this.getSourceImageCellTopLeft( spriteSheetName, cellID );

        // Get the dimensions of the cell itself
        let cellDimensions = this.getCellDimensions( spriteSheetName );

        // Add width and height from cell dimensions to the initial starting point.  Presto!
        return new Point(
            startingPoint.x + cellDimensions.x,
            startingPoint.y + cellDimensions.y
        );
    }


    /**
     * Get the size of a single cell unit in pixels
     * @param spriteSheetName
     * @returns {Point}  x = width, y = height
     */
    public static getCellDimensions( spriteSheetName : string ) : Point {

        // # of cells wide and high on the sprite sheet
        let sheetGridCellsWide = this.getSpriteSheetSizing( spriteSheetName ).x;
        let sheetGridCellsHigh = this.getSpriteSheetSizing( spriteSheetName ).y;


        // Get pixeld dimensions for sheet width and height
        let sheetWidth = this.getSpriteSheetAsset( spriteSheetName ).getNaturalWidth;
        let sheetHeight = this.getSpriteSheetAsset( spriteSheetName ).getNaturalHeight;

        return new Point (
            sheetWidth / sheetGridCellsWide,
            sheetHeight / sheetGridCellsHigh
        );
    }

    /**
     * Get an image from the library
     *
     * @param name string  The name of the asset to retrieve
     *
     * @return Image Asset or null(?)
     */
    protected static getSpriteSheetAsset( name : string ) : any {

        return this.spriteSheetLibrary.get( name );
    }

    /**
     * Add / override an image to the library
     *
     * @param name string  The name against which to store the asset
     * @param image  The asset to store
     */
    protected static setSpriteSheetAsset( name : string, image : any ) : void {

        this.spriteSheetLibrary.set( name, image );
    }

    /**
     * Get the assigned sizing for a spriteSheet.  Use the same name as the spriteSheet in question.
     *
     * @param name  The name of the spriteSheet you need the data about
     *
     * @returns {Point}  x = cells wide, y = cells high
     */
    protected static getSpriteSheetSizing( name : string ) : Point {

        let sizing = this.spriteSheetSizing.get( name );
        return ( sizing ) ? sizing : new Point( 1, 1 );
    }

    /**
     * Set the assigned sizing for a spriteSheet (cells wide x cells high) Use the same name as the spriteSheet
     * asset in question.
     *
     * @param name  The name of the spriteSheet you're describing
     * @param dimensions Point  x = cells wide, y = cells high
     */
    protected static setSpriteSheetSizing( name : string, dimensions : Point ) : void {

        this.spriteSheetSizing.set( name, dimensions );
    }
}
