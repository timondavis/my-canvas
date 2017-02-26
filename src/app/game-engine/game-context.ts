import { GameInputObserver } from './game-input-observer';
import { GameEnvironment } from "./game-environment";
import { GameRenderer } from "./game-renderer";

export class GameContext {


    public constructor( private inputObserver : GameInputObserver,
                        private renderingContext : CanvasRenderingContext2D,
                        private gameEnvironment : GameEnvironment = new GameEnvironment(),
                        private gameRenderer : GameRenderer = new GameRenderer()
    ) { }

    public getInputObserver() {
        return this.inputObserver;
    }

    public getRenderingContext() {
        return this.renderingContext;
    }

    public getGameEnvironment() {

        return this.gameEnvironment;
    }

    public getGameRenderer() {

        return this.gameRenderer;
    }

    public setGameEnvironment( gameEnvironment : GameEnvironment ) {

        this.gameEnvironment = gameEnvironment;
    }

    public setGameRenderer( gameRenderer : GameRenderer ) {

        this.gameRenderer = gameRenderer;
    }

}
