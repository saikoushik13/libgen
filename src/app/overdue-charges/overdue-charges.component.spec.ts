import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverdueChargesComponent } from './overdue-charges.component';

describe('OverdueChargesComponent', () => {
  let component: OverdueChargesComponent;
  let fixture: ComponentFixture<OverdueChargesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OverdueChargesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OverdueChargesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
