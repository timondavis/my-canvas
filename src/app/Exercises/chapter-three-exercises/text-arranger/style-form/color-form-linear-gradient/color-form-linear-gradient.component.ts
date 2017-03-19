import { Component, OnInit } from '@angular/core';
import { TextArrangerFormComponent } from "../../text-arranger-form/text-arranger-form.component";

@Component({
  selector: 'app-color-form-linear-gradient',
  templateUrl: './color-form-linear-gradient.component.html',
  styleUrls: ['./color-form-linear-gradient.component.css']
})
export class ColorFormLinearGradientComponent extends TextArrangerFormComponent implements OnInit {

  private leftColorFill   : String  = '#f00';
  private centerColorFill : String  = '#00f';
  private rightColorFill  : String  = '#f00';


  ngOnInit() {

  }

}
