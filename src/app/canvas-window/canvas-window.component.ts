import { Component, OnInit, Input } from '@angular/core';
import { GameContext } from "../game-engine/game-context";
import { GameInputObserver } from "../game-engine/game-input-observer";
import { IsPointInPathGame } from "../Exercises/chapter-two-exercises/is-point-in-path/is-point-in-path-game";
import { BasicRectanglesGame } from "../Exercises/chapter-two-exercises/basic-rectangles/basic-rectangles-game";
import { PatternFillsGame } from "../Exercises/chapter-two-exercises/pattern-fills/pattern-fills-game";
import { ColorsAndGradientsGame } from "../Exercises/chapter-two-exercises/colors-and-gradients/colors-and-gradients-game";
import { SimpleTransformationsGame } from "../Exercises/chapter-two-exercises/simple-transformations/simple-transformations-game";

@Component({
  selector: 'app-canvas-window',
  templateUrl: './canvas-window.component.html',
  styleUrls: ['./canvas-window.component.css']
})
export class CanvasWindowComponent implements OnInit  {

  public gameContext : GameContext = CanvasWindowComponent.buildGameContext();

  public static buildGameContext() : GameContext {

    let context = new GameContext( new GameInputObserver() );
    let game = new SimpleTransformationsGame( context );

    context.setGame( game );

    return context;
  }

  ngOnInit() {

  }
}
