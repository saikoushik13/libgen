import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EDatabaseCategoryComponent } from './e-database-category.component';

describe('EDatabaseCategoryComponent', () => {
  let component: EDatabaseCategoryComponent;
  let fixture: ComponentFixture<EDatabaseCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EDatabaseCategoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EDatabaseCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
