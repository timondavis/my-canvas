import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Debugger } from "../../../../game-engine/debugger";

@Component({
  selector: 'app-text-arranger-form',
  templateUrl: './text-arranger-form.component.html',
  styleUrls: ['./text-arranger-form.component.css']
})
export class TextArrangerFormComponent implements OnInit {

  public textArrangerFormUpdate : EventEmitter<Event>;

  constructor() {

    this.textArrangerFormUpdate = new EventEmitter<Event>();
  }

  public updateRenderType( event : Event ) {

    this.textArrangerFormUpdate.emit( event );
  }

  ngOnInit() {
  }

}
