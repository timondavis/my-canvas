import { Component, OnInit, ViewChild, HostListener, ElementRef, Input, AfterViewInit } from '@angular/core';
import { GameContext } from "../game-context";

@Component({
  selector: 'app-game-canvas',
  templateUrl: './game-canvas.component.html',
  styleUrls: ['./game-canvas.component.css']
})
export class GameCanvasComponent implements OnInit, AfterViewInit {

  @ViewChild( 'gameCanvas' ) canvasRef : ElementRef;

  @HostListener( 'click', ['$event'] ) onClick( e )             { this.contextInput.getInputObserver().registerMouseClicked( e ); }
  @HostListener( 'mouseenter', ['$event'] ) onMouseEnter( e )   { this.contextInput.getInputObserver().registerMouseEnter( e ); }
  @HostListener( 'mouseleave', ['$event'] ) onMouseLeave( e )   { this.contextInput.getInputObserver().registerMouseLeave( e ); }
  @HostListener( 'mousemove', ['$event'] ) onMouseMove( e )     { this.contextInput.getInputObserver().registerMouseMove( e ); }
  @HostListener( 'window:keydown', ['$event'] ) onKeyDown( e )  { this.contextInput.getInputObserver().registerKeyPress( e ); }
  @HostListener( 'window:keyup', ['$event'] ) onKeyUp( e )      { this.contextInput.getInputObserver().registerKeyRelease( e ); }

  @Input( 'gameContext' ) contextInput : GameContext;

  ngOnInit() { }

  ngAfterViewInit() {

    if ( ! this.contextInput ) { throw ( "gameContext directive Required for GameCanvasComponent" ); }

    let context2d = this.canvasRef.nativeElement.getContext( '2d' );

    this.contextInput.setCanvasElement( this.canvasRef.nativeElement );

    if ( this.contextInput.getRenderingContext() == null  ) {
      this.contextInput.setRenderingContext( context2d );
    }

    this.contextInput.getGame().loadGame();
    this.contextInput.getGame().run();
  }

}
