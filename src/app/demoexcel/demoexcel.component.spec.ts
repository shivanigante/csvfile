import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoexcelComponent } from './demoexcel.component';

describe('DemoexcelComponent', () => {
  let component: DemoexcelComponent;
  let fixture: ComponentFixture<DemoexcelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemoexcelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoexcelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
