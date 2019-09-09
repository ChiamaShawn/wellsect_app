import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccomplishmentPage } from './accomplishment.page';

describe('AccomplishmentPage', () => {
  let component: AccomplishmentPage;
  let fixture: ComponentFixture<AccomplishmentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccomplishmentPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccomplishmentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
