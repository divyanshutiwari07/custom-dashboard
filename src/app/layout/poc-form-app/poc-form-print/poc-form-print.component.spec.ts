import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PocFormPrintComponent } from './poc-form-print.component';

describe('PocFormPrintComponent', () => {
  let component: PocFormPrintComponent;
  let fixture: ComponentFixture<PocFormPrintComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PocFormPrintComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PocFormPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
