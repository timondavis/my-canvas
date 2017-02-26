import { GameContext } from "./game-context";
export class Game {

    public constructor( protected context : GameContext ) {

    }

    public loadGame() {

    }

    public getContext() : GameContext {

        return this.context;
    }
}
