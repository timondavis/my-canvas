import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, Output, EventEmitter, HostListener } from '@angular/core';
import { ChapterOneExercises } from "./chapter-one-exercises/chapter-one-exercises";
import { GameContext } from "../game-engine/game-context";
import { GameInputObserver } from "../game-engine/game-input-observer";

@Component({
  selector: 'app-canvas-window',
  templateUrl: './canvas-window.component.html',
  styleUrls: ['./canvas-window.component.css']
})
export class CanvasWindowComponent implements OnInit, AfterViewInit  {

  @ViewChild( 'gameCanvas' ) canvasRef : ElementRef;

  private inputObserver : GameInputObserver;

  public constructor( ) {

    this.inputObserver = new GameInputObserver();
  }

  public onclick( e ) {

    this.transmitClick( e );
  }

  private transmitClick( e ) { this.inputObserver.registerWindowClicked( e ); }

  ngOnInit() { }

  ngAfterViewInit() {

      let context2d = this.canvasRef.nativeElement.getContext( '2d' );
      this.inputObserver = new GameInputObserver();

      ChapterOneExercises.load_GuessTheLetter( new GameContext( this.inputObserver, context2d ) );
  }
}
