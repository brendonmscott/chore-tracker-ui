import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoresAddComponent } from './chores-add.component';

describe('ChoresAddComponent', () => {
  let component: ChoresAddComponent;
  let fixture: ComponentFixture<ChoresAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChoresAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoresAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
