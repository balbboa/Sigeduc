import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidarCPFComponent } from './validar-cpf.component';

describe('ValidarCPFComponent', () => {
  let component: ValidarCPFComponent;
  let fixture: ComponentFixture<ValidarCPFComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValidarCPFComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidarCPFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
