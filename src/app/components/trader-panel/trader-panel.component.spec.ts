import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraderPanelComponent } from './trader-panel.component';

describe('TraderPanelComponent', () => {
  let component: TraderPanelComponent;
  let fixture: ComponentFixture<TraderPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TraderPanelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TraderPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
