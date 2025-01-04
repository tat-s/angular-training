import { TestBed } from '@angular/core/testing';
import { HelloComponent } from './hello.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HelloComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(HelloComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'angular-training' title`, () => {
    const fixture = TestBed.createComponent(HelloComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('angular-training');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(HelloComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, angular-training');
  });
});
