import { RenderableImageGameEntity } from "./renderable-image-game-entity";
import { TileMap } from "../game-tile/tile-map/tile-map";
export class TileFriendlyGameEntity extends RenderableImageGameEntity {

    /**
     * Render Method for drawing onto a map
     *
     *
     */
    public renderOntoTileMap( context : CanvasRenderingContext2D, map : TileMap ) {

        context.save();
        context.setTransform( 1, 0, 0, 1, 0, 0 );

        context.translate( this.getPosition().x + map.getPosition().x, this.getPosition().y + map.getPosition().y );

        context.rotate( this.rotation * Math.PI / 180 );

        this.renderFromSpriteCell( context );

        context.translate( map.getPosition().x, map.getPosition().y );

        context.restore();
    }
}
