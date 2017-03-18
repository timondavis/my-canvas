import { Component, OnInit } from '@angular/core';
import { TextArrangerFormComponent } from "../../text-arranger-form/text-arranger-form.component";

@Component({
  selector: 'app-color-form-basic',
  templateUrl: './color-form-basic.component.html',
  styleUrls: ['./color-form-basic.component.css']
})
export class ColorFormBasicComponent extends TextArrangerFormComponent implements OnInit {

  ngOnInit() {
  }

}
