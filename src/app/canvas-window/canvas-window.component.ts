import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { ImageBasicsGame } from "../Exercises/chapter-four-exercises/image-basics/image-basics-game";
import { Game } from "../game-engine/game/game";
import { GameInputObserver } from "../game-engine/game/game-observer/game-input-observer";
import { TanksGame } from "../Exercises/chapter-four-exercises/tanks/tanks-game";

@Component({
  selector: 'app-canvas-window',
  templateUrl: './canvas-window.component.html',
  styleUrls: ['./canvas-window.component.css']
})
export class CanvasWindowComponent implements OnInit  {

  @ViewChild( 'textArrangerForm' ) textArrangerForm : Component;

  public game : Game = CanvasWindowComponent.buildGame();

  public static buildGame() : Game {

    return new ImageBasicsGame( new GameInputObserver() );
  }

  ngOnInit() {

    this.game.registerRelatedComponent( 'textArrangerForm', this.textArrangerForm );
  }
}
