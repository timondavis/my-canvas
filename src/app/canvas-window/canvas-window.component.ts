import { Component, OnInit, Input } from '@angular/core';
import { GameContext } from "../game-engine/game-context";
import { GameInputObserver } from "../game-engine/game-input-observer";
import { IsPointInPathGame } from "../Exercises/chapter-two-exercises/is-point-in-path/is-point-in-path-game";

@Component({
  selector: 'app-canvas-window',
  templateUrl: './canvas-window.component.html',
  styleUrls: ['./canvas-window.component.css']
})
export class CanvasWindowComponent implements OnInit  {

  public gameContext : GameContext = CanvasWindowComponent.buildGameContext();

  public static buildGameContext() : GameContext {

    let context = new GameContext( new GameInputObserver() );
    let game = new IsPointInPathGame( context );

    context.setGame( game );

    return context;
  }

  ngOnInit() {

  }
}
