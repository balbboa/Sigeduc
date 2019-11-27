import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NeeComponent } from './nee.component';

describe('NeeComponent', () => {
  let component: NeeComponent;
  let fixture: ComponentFixture<NeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
