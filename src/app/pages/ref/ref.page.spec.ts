import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RefPage } from './ref.page';

describe('RefPage', () => {
  let component: RefPage;
  let fixture: ComponentFixture<RefPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RefPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RefPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
