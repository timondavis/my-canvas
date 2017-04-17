/**
 * Represents a point on a 2D cartesian graph
 */
export class Point {

    /** @var The x coordinate of the point **/
    public x : number;

    /** @var The y coordinate of the point **/
    public y : number;

    /**
     * Creates a new point
     * @param x : number  The x coordinate for the Point
     * @param y : number  The y coordinate for the Point
     */
    public constructor( x : number = 0,  y : number = 0 ) {

        this.x = x;
        this.y = y;
    }
}
