import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-style-form',
  templateUrl: './style-form.component.html',
  styleUrls: ['./style-form.component.css']
})
export class StyleFormComponent implements OnInit {

  constructor() {

    this.colorMode = 'basic';
  }

  // Exposes variable for input.  colorMode will determine which DOM children are displayed.
  @Input( 'color-mode' ) colorMode;

  ngOnInit() {
  }

}
