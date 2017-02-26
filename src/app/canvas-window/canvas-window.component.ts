import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, Output, EventEmitter, HostListener } from '@angular/core';
import { InputControllerService } from "./input-controller.service";
import { ChapterOneExercises } from "./chapter-one-exercises/chapter-one-exercises";
import { GameContext } from "./game-context";

@Component({
  selector: 'app-canvas-window',
  templateUrl: './canvas-window.component.html',
  styleUrls: ['./canvas-window.component.css']
})
export class CanvasWindowComponent implements OnInit, AfterViewInit  {

  @ViewChild( 'gameCanvas' ) canvasRef : ElementRef;

  public context2d : CanvasRenderingContext2D;

  public constructor( public masterInputListener : InputControllerService ) { }

  public onclick( e ) {

    this.transmitClick( e );
  }

  private transmitClick( e ) { this.masterInputListener.registerWindowClick( e ) }

  ngOnInit() { }

  ngAfterViewInit() {

      this.context2d = this.canvasRef.nativeElement.getContext( '2d' );

      ChapterOneExercises.load_GuessTheLetter( new GameContext( this.masterInputListener, this.context2d ) );
  }
}
