import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoutenanceListComponent } from './soutenance-list-component';

describe('SoutenanceListComponent', () => {
  let component: SoutenanceListComponent;
  let fixture: ComponentFixture<SoutenanceListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SoutenanceListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SoutenanceListComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
