import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SindicoComponent } from './sindico.component';

describe('SindicoComponent', () => {
  let component: SindicoComponent;
  let fixture: ComponentFixture<SindicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SindicoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SindicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
