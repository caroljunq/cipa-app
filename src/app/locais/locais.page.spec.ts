import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocaisPage } from './locais.page';

describe('LocaisPage', () => {
  let component: LocaisPage;
  let fixture: ComponentFixture<LocaisPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocaisPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocaisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
