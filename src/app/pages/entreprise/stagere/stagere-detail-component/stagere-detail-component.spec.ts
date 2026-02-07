import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StagereDetailComponent } from './stagere-detail-component';

describe('StagereDetailComponent', () => {
  let component: StagereDetailComponent;
  let fixture: ComponentFixture<StagereDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StagereDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StagereDetailComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
