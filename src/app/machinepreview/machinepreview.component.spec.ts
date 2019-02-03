import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MachinepreviewComponent } from './machinepreview.component';

describe('MachinepreviewComponent', () => {
  let component: MachinepreviewComponent;
  let fixture: ComponentFixture<MachinepreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MachinepreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MachinepreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
