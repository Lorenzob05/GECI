import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalSsowebComponent } from './modal-ssoweb.component';

describe('ModalSsowebComponent', () => {
  let component: ModalSsowebComponent;
  let fixture: ComponentFixture<ModalSsowebComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalSsowebComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalSsowebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
