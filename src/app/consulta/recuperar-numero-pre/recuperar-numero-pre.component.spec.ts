import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecuperarNumeroPreComponent } from './recuperar-numero-pre.component';

describe('RecuperarNumeroPreComponent', () => {
  let component: RecuperarNumeroPreComponent;
  let fixture: ComponentFixture<RecuperarNumeroPreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecuperarNumeroPreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecuperarNumeroPreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
