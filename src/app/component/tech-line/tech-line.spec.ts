import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechLine } from './tech-line';

describe('TechLine', () => {
  let component: TechLine;
  let fixture: ComponentFixture<TechLine>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TechLine]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechLine);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
