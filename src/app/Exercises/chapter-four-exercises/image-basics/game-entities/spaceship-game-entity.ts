import { isNull } from "util";
import { RenderableImageGameEntity } from "../../../../game-engine/game-entity/renderable-image-game-entity";

export class SpaceshipGameEntity extends RenderableImageGameEntity{

    private image : any;

    public setImage( image : any ) {
        this.image = image;

        let self = this;

        this.image.addEventListener( 'load', function() {
            self.assetsLoaded = true;
        });
    }

    public getImage() {
        return this.image;
    }

    update() {}

    render( context: CanvasRenderingContext2D ) {

        if ( ! isNull( this.image ) ) {

            context.drawImage( this.image, this.getPosition().x, this.getPosition().y, this.width, this.height );
        }
    }
}
