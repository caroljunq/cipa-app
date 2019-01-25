import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefinicaoPage } from './definicao.page';

describe('DefinicaoPage', () => {
  let component: DefinicaoPage;
  let fixture: ComponentFixture<DefinicaoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefinicaoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefinicaoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
