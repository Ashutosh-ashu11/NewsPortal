import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetEverythingComponent } from './get-everything.component';

describe('GetEverythingComponent', () => {
  let component: GetEverythingComponent;
  let fixture: ComponentFixture<GetEverythingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetEverythingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetEverythingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
