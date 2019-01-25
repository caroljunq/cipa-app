import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApoioPage } from './apoio.page';

describe('ApoioPage', () => {
  let component: ApoioPage;
  let fixture: ComponentFixture<ApoioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApoioPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApoioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
