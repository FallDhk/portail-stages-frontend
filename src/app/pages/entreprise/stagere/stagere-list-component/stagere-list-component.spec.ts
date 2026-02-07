import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StagereListComponent } from './stagere-list-component';

describe('StagereListComponent', () => {
  let component: StagereListComponent;
  let fixture: ComponentFixture<StagereListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StagereListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StagereListComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
