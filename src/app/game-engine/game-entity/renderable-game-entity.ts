import { GameEntity } from "./game-entity";
import { Point } from "../library/point";
export abstract class RenderableGameEntity implements GameEntity {

    public assetsLoaded : boolean = false;

    protected position : Point = new Point();
    protected width : number = null;
    protected height : number = null;

    public abstract update();
    public abstract render( context : CanvasRenderingContext2D );

    /**
     * Default init routine
     */
    public init() {}

    /**
     * Set the placement and size of the entity on the grid.
     *
     * @param xPos    number
     * @param yPos    number
     * @param width   number
     * @param height  number
     */
    public setPositionAndSize( xPos : number, yPos : number, width : number, height : number ) {

        this.position.x = xPos;
        this.position.y = yPos;
        this.width = width;
        this.height = height;
    }

    /**
     * Place the entity at a grid location without affecting size
     *
     * @param xPos number
     * @param yPos number
     */
    public setPosition( xPos : number, yPos : number ) {

        this.position.x = xPos;
        this.position.y = yPos;
    }

    /**
     * Set the x position of the entity on the grid
     *
     * @param x : number:
     */
    public setXPosition( x : number ) {

        this.position.x = x;
    }

    /**
     * Set the y position of the entity on the grid
     *
     * @param y : number
     */
    public setYPosition( y : number ) {

        this.position.y = y;
    }

    /**
     * Set the width of the entity as rendered
     *
     * @param width : number
     */
    public setWidth( width : number ) {

        this.width = width;
    }

    /**
     * Set the height of the entity as rendered
     *
     * @param height : number
     */
    public setHeight( height : number ) {

        this.height = height;
    }

    /**
     * Get the x,y position of the entity
     *
     * @returns {Point}
     */
    public getPosition() {

        return this.position;
    }

    /**
     * Get the width of the rendered entity, as rendered
     *
     * return number
     */
    public getWidth() {

        return this.width;
    }

    /**
     * Get the height of the rendered entity, as rendered
     *
     * @returns {number}
     */
    public getHeight() {

        return this.height;
    }
}
