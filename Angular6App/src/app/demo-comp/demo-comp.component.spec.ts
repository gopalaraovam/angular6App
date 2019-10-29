import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoCOmpComponent } from './demo-comp.component';

describe('DemoCOmpComponent', () => {
  let component: DemoCOmpComponent;
  let fixture: ComponentFixture<DemoCOmpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoCOmpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoCOmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
