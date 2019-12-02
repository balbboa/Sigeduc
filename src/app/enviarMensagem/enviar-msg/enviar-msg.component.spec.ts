import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnviarMsgComponent } from './enviar-msg.component';

describe('EnviarMsgComponent', () => {
  let component: EnviarMsgComponent;
  let fixture: ComponentFixture<EnviarMsgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnviarMsgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnviarMsgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
