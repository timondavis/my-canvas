/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ColorFormRadialGradientStrokeComponent } from './color-form-radial-gradient-stroke.component';

describe('ColorFormRadialGradientStrokeComponent', () => {
  let component: ColorFormRadialGradientStrokeComponent;
  let fixture: ComponentFixture<ColorFormRadialGradientStrokeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColorFormRadialGradientStrokeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorFormRadialGradientStrokeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
