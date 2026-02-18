import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipyardPage } from './shipyard-page';

describe('ShipyardPage', () => {
  let component: ShipyardPage;
  let fixture: ComponentFixture<ShipyardPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShipyardPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShipyardPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
