import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarPreComponent } from './consultar-pre.component';

describe('ConsultarPreComponent', () => {
  let component: ConsultarPreComponent;
  let fixture: ComponentFixture<ConsultarPreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultarPreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultarPreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
