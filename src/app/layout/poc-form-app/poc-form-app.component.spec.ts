import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PocFormAppComponent } from './poc-form-app.component';

describe('PocFormAppComponent', () => {
  let component: PocFormAppComponent;
  let fixture: ComponentFixture<PocFormAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PocFormAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PocFormAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
