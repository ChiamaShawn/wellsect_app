import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsPharmaciesPage } from './tabs-pharmacies.page';

describe('TabsPharmaciesPage', () => {
  let component: TabsPharmaciesPage;
  let fixture: ComponentFixture<TabsPharmaciesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabsPharmaciesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabsPharmaciesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
