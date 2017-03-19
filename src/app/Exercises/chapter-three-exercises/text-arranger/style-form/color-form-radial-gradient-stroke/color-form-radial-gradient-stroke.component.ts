import { Component, OnInit } from '@angular/core';
import { TextArrangerFormComponent } from "../../text-arranger-form/text-arranger-form.component";

@Component({
  selector: 'app-color-form-radial-gradient-stroke',
  templateUrl: './color-form-radial-gradient-stroke.component.html',
  styleUrls: ['./color-form-radial-gradient-stroke.component.css']
})
export class ColorFormRadialGradientStrokeComponent extends TextArrangerFormComponent implements OnInit {

  private outsideColorStroke = '#0ff';
  private centerColorStroke = '#ff0';
  private insideColorStroke = '#0ff';

  ngOnInit() {
  }

}
