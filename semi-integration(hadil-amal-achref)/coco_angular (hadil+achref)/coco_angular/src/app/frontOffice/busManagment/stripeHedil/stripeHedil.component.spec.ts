import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StripeHedilComponent } from './stripeHedil.component';

describe('StripeComponent', () => {
  let component: StripeHedilComponent;
  let fixture: ComponentFixture<StripeHedilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StripeHedilComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StripeHedilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
