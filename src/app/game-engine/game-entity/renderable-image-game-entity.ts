import { RenderableGameEntity } from "./renderable-game-entity";
import { Point } from "../library/point";
import { SpriteStateCollection } from "../library/sprite/sprite-state-collection";
import { SpriteState } from "../library/sprite/sprite-state";
import { isNull } from "util";

export abstract class RenderableImageGameEntity extends RenderableGameEntity {

    /**
     * Define the sprite states available to this entity
     *
     * @type {SpriteStateCollection}
     */
    private spriteStates : SpriteStateCollection = new SpriteStateCollection();

    /**
     * The ID of the current cell in the spritesheet
     *
     * @type {number}
     */
    private currentCellID : number = 0;

    /**
     * The name of the current sprite sheet being used for an instance of this class.
     *
     * @type {string}
     */
    protected currentSpriteState : SpriteState = null;

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
    private static spriteSheetGridDimensions : Map<string, Point> = new Map<string, Point>();

    /**
     * By default, update will always advance to the next frame on the current state's cell path upon update tick.
     */
    public update() {

        if ( ! isNull( this.getCurrentSpriteState() ) ) {
            this.advanceCell();
        }
    }

    public getSpriteStates() : SpriteStateCollection {

        return this.spriteStates;
    }

    /**
     * Get the current cell ID being rendered
     * @returns {number}
     */
    public getCurrentCellID() : number {

        return this.currentCellID;
    }

    /**
     * Get the current sprite state for this enetity
     *
     * @returns {string}
     */
    public getCurrentSpriteState() : SpriteState  {

        return this.currentSpriteState;
    }

    /**
     * Define the current sprite state for this entity
     *
     * @param spriteStateName : string  The name of the sprite state to assign to this entity
     */
    public setCurrentSpriteState( spriteStateName : string ) : void {

        // Set the current sprite state
        this.currentSpriteState = this.spriteStates.getSpriteState( spriteStateName );

        // Set the cell ID to be at the start of the loop.
        this.setCurrentCellID( this.getCurrentSpriteState().getSpriteCellIDMin() );
    }

    /**
     * Renders a cell from the sprite sheet.  Uses properties to deterimine rendering size and locaiton
     *
     * @param cellID
     * @param context
     */
    public renderFromSpriteCell( context : CanvasRenderingContext2D ) {

        let spriteState = this.getCurrentSpriteState();
        let spriteSheetName = spriteState.getSpriteSheetName();

        let cellID = this.getCurrentCellID();

        let spriteSheet = RenderableImageGameEntity.getSpriteSheetAsset( spriteSheetName );
        let spriteSheetSize = RenderableImageGameEntity.getSpriteSheetGridDimensions( spriteSheetName );

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
     * Set the current cell ID to render on the current sprite state
     *
     * @param id
     */
    public setCurrentCellID( id : number ) {

        this.currentCellID = id;
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
        this.setSpriteSheetGridDimensions( name, new Point( numberOfHorizontalCells, numberOfVerticalCells ) );
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
        let spriteSheetSize = this.getSpriteSheetGridDimensions( spriteSheetName );

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
        let sheetGridCellsWide = this.getSpriteSheetGridDimensions( spriteSheetName ).x;
        let sheetGridCellsHigh = this.getSpriteSheetGridDimensions( spriteSheetName ).y;


        // Get pixeld dimensions for sheet width and height
        let sheetWidth = this.getSpriteSheetAsset( spriteSheetName ).width;
        let sheetHeight = this.getSpriteSheetAsset( spriteSheetName ).height;

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
    protected static getSpriteSheetGridDimensions( name : string ) : Point {

        let sizing = this.spriteSheetGridDimensions.get( name );
        return ( sizing ) ? sizing : new Point( 1, 1 );
    }

    /**
     * Set the assigned sizing for a spriteSheet (cells wide x cells high) Use the same name as the spriteSheet
     * asset in question.
     *
     * @param name  The name of the spriteSheet you're describing
     * @param dimensions Point  x = cells wide, y = cells high
     */
    protected static setSpriteSheetGridDimensions( name : string, dimensions : Point ) : void {

        this.spriteSheetGridDimensions.set( name, dimensions );
    }

    /**
     * Move to the next cell in the current sprite state, or go back to the beginning
     */
    private advanceCell() {

        let currentCell = this.getCurrentCellID();
        currentCell++;

        if ( currentCell >= this.getCurrentSpriteState().getSpriteCellIDMax() ) {
           currentCell = this.getCurrentSpriteState().getSpriteCellIDMin();
        }

        this.setCurrentCellID( currentCell );
    }

    private regressCell() {

        let currentCell = this.getCurrentCellID();

        currentCell--;

        if ( currentCell < this.getCurrentSpriteState().getSpriteCellIDMin() ) {
            currentCell = this.getCurrentSpriteState().getSpriteCellIDMax();
        }

        this.setCurrentCellID( currentCell );
    }
}
