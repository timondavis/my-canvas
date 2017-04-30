import { RenderableImageGameEntity } from "../renderable-image-game-entity";
export class GameTile extends RenderableImageGameEntity {

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
            this.getPosition().x, this.getPosition().y,
            this.getWidth(), this.getHeight()
        );
    }

}
