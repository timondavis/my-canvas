import { isNull } from "util";
import { RenderableGameEntity } from "../renderable-game-entity";
import { SpriteStateCollection } from "./collection/sprite-state-collection";
import { SpriteState } from "./sprite-state";
import { Point } from "../../../library/graph/point";

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
     * The name of the current sprite state
     * @type {string}
     */
    protected currentSpriteStateName : string = '';


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


    /**
     * Move to the next cell in the current sprite state, or go back to the beginning
     */
    public advanceCell() {

        let currentCell = this.getCurrentCellID();
        currentCell++;

        if ( currentCell > this.getCurrentSpriteState().getSpriteCellIDMax() ) {
            currentCell = this.getCurrentSpriteState().getSpriteCellIDMin();
        }

        this.setCurrentCellID( currentCell );
    }

    public reverseCell() {

        let currentCell = this.getCurrentCellID();

        currentCell--;

        if ( currentCell < this.getCurrentSpriteState().getSpriteCellIDMin() ) {
            currentCell = this.getCurrentSpriteState().getSpriteCellIDMax();
        }

        this.setCurrentCellID( currentCell );
    }

    public getSpriteStates() : SpriteStateCollection {

        return this.spriteStates;
    }

    /**
     * Default Render Method
     *
     * @param context
     */
    public render( context: CanvasRenderingContext2D ) {

        context.save();
        context.setTransform( 1, 0, 0, 1, 0, 0 );

        context.translate( this.getPosition().x, this.getPosition().y );

        context.rotate( this.rotation * Math.PI / 180 );

        context.fillStyle = '#000';
        context.strokeStyle = '#000';
        context.fillRect( -2.5, -2.5, 5, 5 );

        this.renderFromSpriteCell( context );

        context.restore();
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
     * Get the key / name of teh current sprite state
     * @returns {string}
     */
    public getCurrentSpriteStateName() : string {

        return this.currentSpriteStateName
    }

    /**
     * Define the current sprite state for this entity
     *
     * @param spriteStateName : string  The name of the sprite state to assign to this entity
     */
    public setCurrentSpriteState( spriteStateName : string ) : void {

        // Set the current sprite state
        this.currentSpriteState = this.spriteStates.getSpriteState( spriteStateName );
        this.currentSpriteStateName = spriteStateName;

        // Set the cell ID to be at the start of the loop.
        this.setCurrentCellID( this.getCurrentSpriteState().getSpriteCellIDMin() );
    }

    /**
     * Renders a cell from the sprite sheet.  Uses properties to deterimine rendering size and locaiton
     *
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

        // Get the width and height ratios between the source and the destination
        let widthRatio = this.getWidth() / cellDimensions.x;
        let heightRatio = this.getHeight() / cellDimensions.y;

        // Draw out the image.
        context.drawImage( spriteSheet,
            sourceLocation.x, sourceLocation.y,
            cellDimensions.x, cellDimensions.y,
            ( -1 * cellDimensions.x  * widthRatio ) * 0.5, ( -1 * cellDimensions.y * heightRatio ) * 0.5,
            this.getWidth(), this.getHeight()
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

        // Calculate row
        let row = Math.floor( cellID / spriteSheetSize.y );

        // Calculate Column
        let imageWidth = ( cellDimensions.x * spriteSheetSize.x );
        let columnpct = ( cellDimensions.x / imageWidth );
        let column = RenderableImageGameEntity.convertCellIDToColumn( spriteSheetName, cellID );

        return new Point(
            columnpct * imageWidth * column, // column
            RenderableImageGameEntity.convertCellIDToRow( spriteSheetName, cellID ) * cellDimensions.y
        );
    }

    /**
     * Convert A Cell ID to a column number (relative to the columns on the associated sprite sheet
     *
     * @param spriteSheetName
     * @param cellID
     * @returns {number}
     */
    public static convertCellIDToColumn( spriteSheetName : string, cellID : number ) {

        let cellsWide = this.getSpriteSheetGridDimensions( spriteSheetName ).x;

        while ( ( cellID - cellsWide ) >= 0 ) {

           cellID -=  cellsWide;
        }

        return cellID;
    }

    /**
     * Convert a Cell ID to a row (relative to the rows on the associated sprite sheet
     *
     * @param spriteSheetName
     * @param cellID
     * @returns {number}
     */
    public static convertCellIDToRow( spriteSheetName : string, cellID : number ) {
        let cellsHigh = this.getSpriteSheetGridDimensions( spriteSheetName ).y;

        return Math.floor( cellID / cellsHigh );
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

}
