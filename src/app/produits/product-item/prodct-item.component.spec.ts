import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdctItemComponent } from './prodct-item.component';

describe('ProdctItemComponent', () => {
  let component: ProdctItemComponent;
  let fixture: ComponentFixture<ProdctItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProdctItemComponent]
    });
    fixture = TestBed.createComponent(ProdctItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
