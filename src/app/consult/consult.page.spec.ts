import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultPage } from './consult.page';

describe('ConsultPage', () => {
  let component: ConsultPage;
  let fixture: ComponentFixture<ConsultPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
