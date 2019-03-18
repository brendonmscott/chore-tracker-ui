import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoresListingComponent } from './chores-listing.component';

describe('ChoresListingComponent', () => {
  let component: ChoresListingComponent;
  let fixture: ComponentFixture<ChoresListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChoresListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoresListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
