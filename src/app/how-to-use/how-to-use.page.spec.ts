import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HowToUsePage } from './how-to-use.page';

describe('HowToUsePage', () => {
  let component: HowToUsePage;
  let fixture: ComponentFixture<HowToUsePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HowToUsePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HowToUsePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
