import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientWorklistComponent } from './client-worklist.component';

describe('ClientWorklistComponent', () => {
  let component: ClientWorklistComponent;
  let fixture: ComponentFixture<ClientWorklistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientWorklistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientWorklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
