import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasLibComponent } from './mas-lib.component';

describe('MasLibComponent', () => {
  let component: MasLibComponent;
  let fixture: ComponentFixture<MasLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
