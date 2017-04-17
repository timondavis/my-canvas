import { GameInputObserver } from "./game-input-observer";
import { GameController } from "./game-controller";
import { GameEnvironment } from "./game-environment";
import { GameRenderer } from "./game-renderer";
import { Component } from "@angular/core";
import { ComponentCollection } from "./library/collection/component-collection";
export abstract class Game {

    public isGameLoaded : boolean = false;
    private gameController : GameController;
    private renderingContext : CanvasRenderingContext2D;
    private gameEnvironment : GameEnvironment;
    private gameRenderer : GameRenderer;
    private canvasElement : Element;
    private relatedComponents : ComponentCollection;

    public constructor( private inputObserver : GameInputObserver ) {

        this.relatedComponents = new ComponentCollection();
    }

    public abstract loadGame();

    public abstract run();

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

    public getGameController() {
        return this.gameController;
    }

    public getCanvasElement() {

        return this.canvasElement;
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

    public setGameController( gameController : GameController ) {

        this.gameController = gameController;
    }

    public setCanvasElement( canvasElementRef : Element ) {

        this.canvasElement = canvasElementRef;
    }

    public registerRelatedComponent( name : string, component : Component ) {

    }
}
