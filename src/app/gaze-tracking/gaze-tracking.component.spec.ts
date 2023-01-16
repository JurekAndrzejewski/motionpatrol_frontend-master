import { TestBed } from '@angular/core/testing';
import { GazeTrackingComponent } from './gaze-tracking.component';

describe('GazeTrackingComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        GazeTrackingComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(GazeTrackingComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'frontend'`, () => {
    const fixture = TestBed.createComponent(GazeTrackingComponent);
    const app = fixture.componentInstance;
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(GazeTrackingComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('frontend app is running!');
  });
});