import { GameContext } from "./game-context";
import { Debugger } from "./debugger";
import { GameEntityCollection } from "./library/game-entity-collection";
export abstract class GameEnvironment {

    private gameEntityCollection : GameEntityCollection;

    public abstract init();

    public abstract update();

    public constructor( protected context : GameContext ) {

        this.gameEntityCollection = new GameEntityCollection();
    }

    public getEntities() {

        return this.gameEntityCollection;
    }

    protected getContext() {

        return this.context;
    }

}
