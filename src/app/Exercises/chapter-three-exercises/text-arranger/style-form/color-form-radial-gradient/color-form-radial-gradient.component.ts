import { Component, OnInit } from '@angular/core';
import { TextArrangerFormComponent } from "../../text-arranger-form/text-arranger-form.component";

@Component({
  selector: 'app-color-form-radial-gradient',
  templateUrl: './color-form-radial-gradient.component.html',
  styleUrls: ['./color-form-radial-gradient.component.css']
})
export class ColorFormRadialGradientComponent extends TextArrangerFormComponent implements OnInit {

  private outsideColorFill = '#0ff';
  private centerColorFill = '#ff0';
  private insideColorFill = '#0ff';

  ngOnInit() {
  }

}
