import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormFeildsComponent } from './form-feilds.component';

describe('FormFeildsComponent', () => {
  let component: FormFeildsComponent;
  let fixture: ComponentFixture<FormFeildsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormFeildsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormFeildsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
