import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ColorPickerModule } from "angular2-color-picker";

import { AppComponent } from './app.component';
import { CanvasWindowComponent } from './canvas-window/canvas-window.component';
import { GameCanvasComponent } from './game-engine/game-canvas/game-canvas.component';
import { TextArrangerFormComponent } from './Exercises/chapter-three-exercises/text-arranger/text-arranger-form/text-arranger-form.component';
import { StyleFormComponent } from './Exercises/chapter-three-exercises/text-arranger/style-form/style-form.component';
import { ColorFormBasicComponent } from './Exercises/chapter-three-exercises/text-arranger/style-form/color-form-basic/color-form-basic.component';
import { ColorFormLinearGradientComponent } from './Exercises/chapter-three-exercises/text-arranger/style-form/color-form-linear-gradient/color-form-linear-gradient.component';
import { ColorFormRadialGradientComponent } from './Exercises/chapter-three-exercises/text-arranger/style-form/color-form-radial-gradient/color-form-radial-gradient.component';
import { ColorFormBasicStrokeComponent } from './Exercises/chapter-three-exercises/text-arranger/style-form/color-form-basic-stroke/color-form-basic-stroke.component';
import { ColorFormLinearGradientStrokeComponent } from './Exercises/chapter-three-exercises/text-arranger/style-form/color-form-linear-gradient-stroke/color-form-linear-gradient-stroke.component';
import { ColorFormRadialGradientStrokeComponent } from './Exercises/chapter-three-exercises/text-arranger/style-form/color-form-radial-gradient-stroke/color-form-radial-gradient-stroke.component';



@NgModule({
  declarations: [
    AppComponent,
    CanvasWindowComponent,
    GameCanvasComponent,
    TextArrangerFormComponent,
    StyleFormComponent,
    ColorFormBasicComponent,
    ColorFormLinearGradientComponent,
    ColorFormBasicStrokeComponent,
    ColorFormLinearGradientStrokeComponent,
    ColorFormRadialGradientComponent,
    ColorFormRadialGradientStrokeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ColorPickerModule
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
