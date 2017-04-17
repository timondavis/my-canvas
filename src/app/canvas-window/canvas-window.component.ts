import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { GameInputObserver } from "../game-engine/game-input-observer";
import { ImageBasicsGame } from "../Exercises/chapter-four-exercises/image-basics/image-basics-game";
import { Game } from "../game-engine/game";

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
