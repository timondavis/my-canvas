import { Component, OnInit, Input } from '@angular/core';
import { GameContext } from "../game-engine/game-context";
import { GameInputObserver } from "../game-engine/game-input-observer";
import { GuessTheLetter } from "../Exercises/chapter-one-exercises/guesstheletter/guess-the-letter";

@Component({
  selector: 'app-canvas-window',
  templateUrl: './canvas-window.component.html',
  styleUrls: ['./canvas-window.component.css']
})
export class CanvasWindowComponent implements OnInit  {

  ngOnInit() { }

  public static buildGameContext() : GameContext {

    let context = new GameContext( new GameInputObserver() );
    let game = new GuessTheLetter( context );

    context.setGame( game );

    return context;
  }
}
