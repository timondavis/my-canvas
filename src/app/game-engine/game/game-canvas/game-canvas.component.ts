import { Component, OnInit, ViewChild, HostListener, ElementRef, Input, AfterViewInit } from '@angular/core';
import { Game } from "../game";
import { Http } from "@angular/http";

@Component({
  selector: 'app-game-canvas',
  templateUrl: './game-canvas.component.html',
  styleUrls: ['./game-canvas.component.css']
})
export class GameCanvasComponent implements OnInit, AfterViewInit {

  @ViewChild( 'gameCanvas' ) canvasRef : ElementRef;

  @HostListener( 'click', ['$event'] ) onClick( e )             { this.game.getInputObserver().registerMouseClicked( e ); }
  @HostListener( 'mouseenter', ['$event'] ) onMouseEnter( e )   { this.game.getInputObserver().registerMouseEnter( e ); }
  @HostListener( 'mouseleave', ['$event'] ) onMouseLeave( e )   { this.game.getInputObserver().registerMouseLeave( e ); }
  @HostListener( 'mousemove', ['$event'] ) onMouseMove( e )     { this.game.getInputObserver().registerMouseMove( e ); }
  @HostListener( 'window:keydown', ['$event'] ) onKeyDown( e )  { this.game.getInputObserver().registerKeyPress( e ); }
  @HostListener( 'window:keyup', ['$event'] ) onKeyUp( e )      { this.game.getInputObserver().registerKeyRelease( e ); }

  @Input( 'gameContext' ) game : Game;

  public constructor( private http : Http ){}

  ngOnInit() {

  }

  ngAfterViewInit() {

    if ( ! this.game ) { throw ( "gameContext directive Required for GameCanvasComponent" ); }

    let context2d = this.canvasRef.nativeElement.getContext( '2d' );

    this.game.setCanvasElement( this.canvasRef.nativeElement );
    this.game.setHttp( this.http );

    if ( this.game.getRenderingContext() == null  ) {
      this.game.setRenderingContext( context2d );
    }

    this.game.loadGame();
    this.game.run();
  }

}
