import { Component, OnInit } from '@angular/core';
import { TextArrangerFormComponent } from "../../text-arranger-form/text-arranger-form.component";

@Component({
  selector: 'app-color-form-basic-stroke',
  templateUrl: './color-form-basic-stroke.component.html',
  styleUrls: ['./color-form-basic-stroke.component.css']
})
export class ColorFormBasicStrokeComponent extends TextArrangerFormComponent implements OnInit {

  private strokeColor : string = '#000';


  ngOnInit() {
  }

}
