import { RenderableGameEntity } from "../../../../game-engine/game-entity/renderable-game-entity";
export class Square extends RenderableGameEntity {

    public rotation : number = 0;
    public color : string = "red";
    public width: number = 50;
    public height: number = 50;
    public x : number = 0;
    public y : number = 0;
    public rotationSpeed = 1;

    public constructor() {

        super();

        this.rotation = 0;
    }

    public update() {

        this.rotation += ( 0.25 ) * this.rotationSpeed;

        if ( this.rotation >= 360.0 ) { this.rotation = 0; }
    }

    public render( context : CanvasRenderingContext2D ) {

        context.setTransform( 1, 0, 0, 1, 0, 0 );
        context.translate( ( this.x + ( 0.5 ) * this.width ) , ( this.y + (0.5) * this.height ) );
        context.scale( 2, 2 );

        let angleInRadians = ( this.rotation ) * ( Math.PI / 180 );

        context.rotate( angleInRadians );
        context.fillStyle = this.color;
        context.fillRect( ( -1 ) * ( 0.5 * this.width ), ( -1 ) * ( 0.5 * this.height ), this.width, this.height  );
    }
}
