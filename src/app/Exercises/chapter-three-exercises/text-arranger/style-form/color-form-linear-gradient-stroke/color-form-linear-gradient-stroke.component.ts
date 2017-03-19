import { Component, OnInit } from '@angular/core';
import { TextArrangerFormComponent } from "../../text-arranger-form/text-arranger-form.component";

@Component({
  selector: 'app-color-form-linear-gradient-stroke',
  templateUrl: './color-form-linear-gradient-stroke.component.html',
  styleUrls: ['./color-form-linear-gradient-stroke.component.css']
})
export class ColorFormLinearGradientStrokeComponent extends TextArrangerFormComponent implements OnInit {

  private leftColorStroke : String = '#f00';
  private centerColorStroke : String = '#00f';
  private rightColorStroke : String = '#f00';


  ngOnInit() {
  }

}
