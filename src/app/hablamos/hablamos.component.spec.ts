import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {HablamosComponent} from './hablamos.component';

describe('HablamosComponent', () => {
  let component: HablamosComponent;
  let fixture: ComponentFixture<HablamosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HablamosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HablamosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
