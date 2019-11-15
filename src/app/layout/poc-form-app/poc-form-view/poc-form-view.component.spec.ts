import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PocFormViewComponent } from './poc-form-view.component';

describe('PocFormViewComponent', () => {
  let component: PocFormViewComponent;
  let fixture: ComponentFixture<PocFormViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PocFormViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PocFormViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
