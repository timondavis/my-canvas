/**
 * Defines a sprite state, containing a name, a spritesheet, and the cell range for that sprite sheet
 */
export class SpriteState {

    /**
     * The name of the spritesheet being referenced in this mode.
     *
     * @type {string}
     */
    private spriteSheet : string;

    /**
     * The lowest number on the spritesheet range
     */
    private rangeMin : number;

    /**
     * The highest number on the spritesheet range
     */
    private rangeMax : number;

    /**
     * Getters and setters for spritesheet
     *
     * @returns {string}
     * @constructor
     */
    public getSpriteSheetName() : string { return this.spriteSheet; };

    /**
     * Create a new sprite state instance
     * @param spriteSheetName
     * @param rangeMin
     * @param rangeMax
     */
    public constructor( spriteSheetName, rangeMin, rangeMax ) {

        this.spriteSheet = spriteSheetName, this.rangeMin = rangeMin, this.rangeMax = rangeMax;
    }

    /**
     * Get an array containing the index keys for the targeted sprites on the target spritesheet.
     * @returns {number[]}
     */
    public getSpriteSheetRange() : any {

        let arraySize = this.rangeMax - this.rangeMin;

        let range = [arraySize];

        for ( let arrayIndex = 0 ; arrayIndex < arraySize ; arrayIndex ++) {
           range[arrayIndex] = this.rangeMin + arrayIndex;
        }

        return range;
    }

    /**
     * The minimum range Cell ID for this state
     */
    public getSpriteCellIDMin() : number {

        return this.rangeMin;
    }

    /**
     * The maximum range Cell ID for this state
     */
    public getSpriteCellIDMax() : number {

        return this.rangeMax;
    }

}
