import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAltaMascotasComponent } from './form-alta-mascotas.component';

describe('FormAltaMascotasComponent', () => {
  let component: FormAltaMascotasComponent;
  let fixture: ComponentFixture<FormAltaMascotasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormAltaMascotasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormAltaMascotasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
