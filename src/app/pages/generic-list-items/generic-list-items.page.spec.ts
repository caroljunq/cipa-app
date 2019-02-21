import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericListItemsPage } from './generic-list-items.page';

describe('GenericListItemsPage', () => {
  let component: GenericListItemsPage;
  let fixture: ComponentFixture<GenericListItemsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenericListItemsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenericListItemsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
