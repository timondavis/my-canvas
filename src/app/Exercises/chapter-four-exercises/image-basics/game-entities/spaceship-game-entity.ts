import { RenderableGameEntity } from "../../../../game-engine/game-entity/renderable-game-entity";
import { isNull } from "util";
export class SpaceshipGameEntity extends RenderableGameEntity{

    private image : any;

    public setImage( image : any ) {
        this.image = image;
    }

    update() {

    }

    render( context: CanvasRenderingContext2D ) {

        if ( ! isNull( this.image ) ) {

            context.drawImage( this.image, 0, 0 );
            context.drawImage( this.image, 50, 50 );
        }
    }
}
