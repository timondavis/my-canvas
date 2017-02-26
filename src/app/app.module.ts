import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CanvasWindowComponent } from './canvas-window/canvas-window.component';
import { InputControllerService } from './canvas-window/input-controller.service';

@NgModule({
  declarations: [
    AppComponent,
    CanvasWindowComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [InputControllerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
