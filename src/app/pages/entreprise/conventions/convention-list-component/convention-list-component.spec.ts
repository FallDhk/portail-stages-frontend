import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConventionListComponent } from './convention-list-component';

describe('ConventionListComponent', () => {
  let component: ConventionListComponent;
  let fixture: ComponentFixture<ConventionListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConventionListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConventionListComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
