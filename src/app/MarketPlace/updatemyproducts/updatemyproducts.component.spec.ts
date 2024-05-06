import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatemyproductsComponent } from './updatemyproducts.component';

describe('UpdatemyproductsComponent', () => {
  let component: UpdatemyproductsComponent;
  let fixture: ComponentFixture<UpdatemyproductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatemyproductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatemyproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
