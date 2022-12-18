import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneCameraComponent } from './one-camera.component';

describe('OneCameraComponent', () => {
  let component: OneCameraComponent;
  let fixture: ComponentFixture<OneCameraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OneCameraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OneCameraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
