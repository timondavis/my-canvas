import { GameContext } from "./game-context";

export abstract class GameRenderer {

    public constructor( protected context : GameContext ) {}

    public abstract draw();
}
