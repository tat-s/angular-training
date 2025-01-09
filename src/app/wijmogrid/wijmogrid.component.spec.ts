import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WijmogridComponent } from './wijmogrid.component';

describe('WijmogridComponent', () => {
  let component: WijmogridComponent;
  let fixture: ComponentFixture<WijmogridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WijmogridComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WijmogridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
