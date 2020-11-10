import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalaryMakerComponent } from './salary-maker.component';

describe('SalaryMakerComponent', () => {
  let component: SalaryMakerComponent;
  let fixture: ComponentFixture<SalaryMakerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalaryMakerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalaryMakerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
