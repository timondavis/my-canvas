import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { GameContext } from "../game-engine/game-context";
import { GameInputObserver } from "../game-engine/game-input-observer";
import { TextArrangerGame } from "../Exercises/chapter-three-exercises/text-arranger/text-arranger-game";

@Component({
  selector: 'app-canvas-window',
  templateUrl: './canvas-window.component.html',
  styleUrls: ['./canvas-window.component.css']
})
export class CanvasWindowComponent implements OnInit  {

  @ViewChild( 'textArrangerForm' ) textArrangerForm : Component;

  public gameContext : GameContext = CanvasWindowComponent.buildGameContext();

  public static buildGameContext() : GameContext {

    let context = new GameContext( new GameInputObserver() );
    let game = new TextArrangerGame( context );

    context.setGame( game );

    return context;
  }

  ngOnInit() {

    this.gameContext.registerRelatedComponent( 'textArrangerForm', this.textArrangerForm );
  }
}
