import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDatosPersonalesComponent } from './modal-datos-personales.component';

describe('ModalDatosPersonalesComponent', () => {
  let component: ModalDatosPersonalesComponent;
  let fixture: ComponentFixture<ModalDatosPersonalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalDatosPersonalesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalDatosPersonalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
