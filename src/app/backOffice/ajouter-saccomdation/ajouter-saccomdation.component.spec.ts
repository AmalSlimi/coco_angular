import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterSAccomdationComponent } from './ajouter-saccomdation.component';

describe('AjouterSAccomdationComponent', () => {
  let component: AjouterSAccomdationComponent;
  let fixture: ComponentFixture<AjouterSAccomdationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterSAccomdationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjouterSAccomdationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
