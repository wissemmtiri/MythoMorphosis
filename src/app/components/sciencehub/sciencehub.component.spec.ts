import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SciencehubComponent } from './sciencehub.component';

describe('SciencehubComponent', () => {
  let component: SciencehubComponent;
  let fixture: ComponentFixture<SciencehubComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SciencehubComponent]
    });
    fixture = TestBed.createComponent(SciencehubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
