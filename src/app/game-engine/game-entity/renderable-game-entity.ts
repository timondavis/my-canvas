import { GameEntity } from "./game-entity";
export abstract class RenderableGameEntity implements GameEntity {

    public abstract update();
    public abstract render( context : CanvasRenderingContext2D );
}
