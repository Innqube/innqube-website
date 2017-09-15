import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomersSayingsComponent } from './customers-sayings.component';

describe('CustomersSayingsComponent', () => {
  let component: CustomersSayingsComponent;
  let fixture: ComponentFixture<CustomersSayingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomersSayingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomersSayingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
