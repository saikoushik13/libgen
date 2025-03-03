import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EDatabaseComponent } from './e-database.component';

describe('EDatabaseComponent', () => {
  let component: EDatabaseComponent;
  let fixture: ComponentFixture<EDatabaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EDatabaseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EDatabaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
