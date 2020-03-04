import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MachinesDashboardComponent } from './machines-dashboard.component';

describe('MachinesDashboardComponent', () => {
  let component: MachinesDashboardComponent;
  let fixture: ComponentFixture<MachinesDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MachinesDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MachinesDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
