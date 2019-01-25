import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CasosPage } from './casos.page';

describe('CasosPage', () => {
  let component: CasosPage;
  let fixture: ComponentFixture<CasosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CasosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CasosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
