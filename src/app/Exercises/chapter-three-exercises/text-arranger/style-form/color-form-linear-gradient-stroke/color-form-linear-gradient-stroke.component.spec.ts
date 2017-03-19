/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ColorFormLinearGradientStrokeComponent } from './color-form-linear-gradient-stroke.component';

describe('ColorFormLinearGradientStrokeComponent', () => {
  let component: ColorFormLinearGradientStrokeComponent;
  let fixture: ComponentFixture<ColorFormLinearGradientStrokeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColorFormLinearGradientStrokeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorFormLinearGradientStrokeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
