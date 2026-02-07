import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffreDetailComponent } from './offre-detail-component';

describe('OffreDetailComponent', () => {
  let component: OffreDetailComponent;
  let fixture: ComponentFixture<OffreDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OffreDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OffreDetailComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
