import { GameContext } from "./game-context";
import { Debugger } from "./debugger";
export abstract class GameEnvironment {

    protected globals = {};
    protected deltas = {};

    public constructor( protected context : GameContext ) {}

    public abstract init();

    public abstract update();


    public getGlobal( key : any ) : any {

        return this.globals[key];
    }

    public getDelta( key : any ) : any {

        return this.deltas[key];
    }

    public setGlobal( key : any, value : any ) : any {

        this.globals[key] = value;
    }

    public setDelta( key : any, value : any ) : any {

        this.deltas[key] = value;
    }
}
