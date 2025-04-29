import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderWithoutLoginComponent } from './header-without-login.component';

describe('HeaderWithoutLoginComponent', () => {
  let component: HeaderWithoutLoginComponent;
  let fixture: ComponentFixture<HeaderWithoutLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderWithoutLoginComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderWithoutLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
