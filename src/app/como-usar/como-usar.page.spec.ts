import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComoUsarPage } from './como-usar.page';

describe('ComoUsarPage', () => {
  let component: ComoUsarPage;
  let fixture: ComponentFixture<ComoUsarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComoUsarPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComoUsarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
