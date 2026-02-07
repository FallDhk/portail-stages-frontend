import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffreCandidaturesComponent } from './offre-candidatures-component';

describe('OffreCandidaturesComponent', () => {
  let component: OffreCandidaturesComponent;
  let fixture: ComponentFixture<OffreCandidaturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OffreCandidaturesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OffreCandidaturesComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
