import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidatureListComponent } from './candidature-list-component';

describe('CandidatureListComponent', () => {
  let component: CandidatureListComponent;
  let fixture: ComponentFixture<CandidatureListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CandidatureListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CandidatureListComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
