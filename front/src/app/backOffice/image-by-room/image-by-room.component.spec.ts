import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageByRoomComponent } from './image-by-room.component';

describe('ImageByRoomComponent', () => {
  let component: ImageByRoomComponent;
  let fixture: ComponentFixture<ImageByRoomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageByRoomComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageByRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
