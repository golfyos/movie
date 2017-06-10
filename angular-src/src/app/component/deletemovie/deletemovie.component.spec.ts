/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DeletemovieComponent } from './deletemovie.component';

describe('DeletemovieComponent', () => {
  let component: DeletemovieComponent;
  let fixture: ComponentFixture<DeletemovieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeletemovieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletemovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
