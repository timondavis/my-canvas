import { GameInputObserver } from './game-input-observer';
import { GameEnvironment } from "./game-environment";
import { GameRenderer } from "./game-renderer";
import { Game } from "./game";
import { GameController } from "./game-controller";
import { ComponentMap } from "./library/component-map";
import { Component } from "@angular/core";

export class GameContext {

    private game : Game;
    private gameController : GameController;
    private renderingContext : CanvasRenderingContext2D;
    private gameEnvironment : GameEnvironment;
    private gameRenderer : GameRenderer;
    private canvasElement : Element;
    private relatedComponents : ComponentMap;

    public constructor( private inputObserver : GameInputObserver ) {

        this.game = null;
        this.relatedComponents = new ComponentMap();
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

    public getGameController() {
        return this.gameController;
    }

    public getCanvasElement() {

        return this.canvasElement;
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

    public setGameController( gameController : GameController ) {

        this.gameController = gameController;
    }

    public setGame( game : Game ) {

        this.game = game;
    }

    public setCanvasElement( canvasElementRef : Element ) {

        this.canvasElement = canvasElementRef;
    }

    public registerRelatedComponent( name : string, component : Component ) {

        this.relatedComponents.updateComponent( name, component );
    }

    public getRelatedComponent( name : string ) {

        return this.relatedComponents.getComponent( name );
    }
}
