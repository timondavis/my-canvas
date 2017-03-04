import { Component, OnInit, Input } from '@angular/core';
import { GameContext } from "../game-engine/game-context";
import { GameInputObserver } from "../game-engine/game-input-observer";
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
    //let game = new SimpleTransformationsGame( context );
    let game = new ColorsAndGradientsGame( context );

    context.setGame( game );

    return context;
  }

  ngOnInit() {

  }

}
