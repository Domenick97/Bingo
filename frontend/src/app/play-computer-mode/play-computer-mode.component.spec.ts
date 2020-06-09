import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayComputerModeComponent } from './play-computer-mode.component';

describe('PlayComputerModeComponent', () => {
  let component: PlayComputerModeComponent;
  let fixture: ComponentFixture<PlayComputerModeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayComputerModeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayComputerModeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
