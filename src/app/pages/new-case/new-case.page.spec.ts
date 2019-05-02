import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCasePage } from './new-case.page';

describe('NewCasePage', () => {
  let component: NewCasePage;
  let fixture: ComponentFixture<NewCasePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewCasePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCasePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
