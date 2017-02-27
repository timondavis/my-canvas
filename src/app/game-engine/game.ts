import { GameContext } from "./game-context";
export abstract class Game {

    public isGameLoaded : boolean = false;

    public constructor( protected context : GameContext ) { }

    public abstract loadGame();

    public abstract run();

    public getContext() : GameContext {

        return this.context;
    }
}
