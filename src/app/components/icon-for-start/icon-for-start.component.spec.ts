import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconForStartComponent } from './icon-for-start.component';

describe('IconForStartComponent', () => {
  let component: IconForStartComponent;
  let fixture: ComponentFixture<IconForStartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconForStartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IconForStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
