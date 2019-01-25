import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IniciarPage } from './iniciar.page';

describe('IniciarPage', () => {
  let component: IniciarPage;
  let fixture: ComponentFixture<IniciarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IniciarPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IniciarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
