import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CanvasWindowComponent } from './canvas-window/canvas-window.component';
import { GameCanvasComponent } from './game-engine/game-canvas/game-canvas.component';
import { TextArrangerFormComponent } from './Exercises/chapter-three-exercises/text-arranger/text-arranger-form/text-arranger-form.component';

@NgModule({
  declarations: [
    AppComponent,
    CanvasWindowComponent,
    GameCanvasComponent,
    TextArrangerFormComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
