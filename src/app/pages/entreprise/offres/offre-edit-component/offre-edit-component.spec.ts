import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffreEditComponent } from './offre-edit-component';

describe('OffreEditComponent', () => {
  let component: OffreEditComponent;
  let fixture: ComponentFixture<OffreEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OffreEditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OffreEditComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
