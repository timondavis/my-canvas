import { GameInputObserver } from './game-input-observer';
import { GameEnvironment } from "./game-environment";
import { GameRenderer } from "./game-renderer";
import { Game } from "./game";

export class GameContext {

    private game : Game;


    public constructor( private inputObserver : GameInputObserver,
                        private renderingContext : CanvasRenderingContext2D = null,
                        private gameEnvironment : GameEnvironment = null,
                        private gameRenderer : GameRenderer = null
    ) {

        this.game = null;
    }


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

    public getGame() {

        return this.game;
    }

    public setGameEnvironment( gameEnvironment : GameEnvironment ) {

        this.gameEnvironment = gameEnvironment;
    }

    public setRenderingContext( renderingContext : CanvasRenderingContext2D ) {

        this.renderingContext = renderingContext;
    }

    public setGameRenderer( gameRenderer : GameRenderer ) {

        this.gameRenderer = gameRenderer;
    }

    public setGame( game : Game ) {

        this.game = game;
    }
}
