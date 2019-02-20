import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefinitionPage } from './definition.page';

describe('DefinitionPage', () => {
  let component: DefinitionPage;
  let fixture: ComponentFixture<DefinitionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefinitionPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefinitionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
