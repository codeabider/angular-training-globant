import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularMaterialFormComponent } from './angular-material-form.component';

describe('AngularMaterialFormComponent', () => {
  let component: AngularMaterialFormComponent;
  let fixture: ComponentFixture<AngularMaterialFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularMaterialFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularMaterialFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
