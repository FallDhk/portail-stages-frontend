import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoutenanceDetailComponent } from './soutenance-detail-component';

describe('SoutenanceDetailComponent', () => {
  let component: SoutenanceDetailComponent;
  let fixture: ComponentFixture<SoutenanceDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SoutenanceDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SoutenanceDetailComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
