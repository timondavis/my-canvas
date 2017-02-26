import { Component, OnInit, ViewChild, HostListener, ElementRef } from '@angular/core';
import { GameInputObserver } from "../game-input-observer";
import { GameContext } from "../game-context";
import { ChapterOneExercises } from "../../Exercises/chapter-one-exercises/chapter-one-exercises";

@Component({
  selector: 'app-game-canvas',
  templateUrl: './game-canvas.component.html',
  styleUrls: ['./game-canvas.component.css']
})
export class GameCanvasComponent implements OnInit {

  @ViewChild( 'gameCanvas' ) canvasRef : ElementRef;

  @HostListener( 'click', ['$event'] ) onClick( e ) { this.inputObserver.registerMouseClicked( e ); }
  @HostListener( 'mouseenter', ['$event'] ) onMouseEnter( e ) { this.inputObserver.registerMouseEnter( e ); }
  @HostListener( 'mouseleave', ['$event'] ) onMouseLeave( e ) { this.inputObserver.registerMouseLeave( e ); }
  @HostListener( 'window:keydown', ['$event'] ) onKeyDown( e ) { this.inputObserver.registerKeyPress( e ); }

  private inputObserver : GameInputObserver;

  public constructor( ) {

    this.inputObserver = new GameInputObserver();
  }

  ngOnInit() { }

  ngAfterViewInit() {

    let context2d = this.canvasRef.nativeElement.getContext( '2d' );
    this.inputObserver = new GameInputObserver();

    ChapterOneExercises.load_GuessTheLetter( new GameContext( this.inputObserver, context2d ) );
  }
}
