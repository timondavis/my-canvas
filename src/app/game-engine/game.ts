import { GameContext } from "./game-context";
export abstract class Game {

    public constructor( protected context : GameContext ) { }

    public abstract loadGame();

    public getContext() : GameContext {

        return this.context;
    }
}
