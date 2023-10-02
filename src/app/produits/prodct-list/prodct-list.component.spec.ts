import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdctListComponent } from './prodct-list.component';

describe('ProdctListComponent', () => {
  let component: ProdctListComponent;
  let fixture: ComponentFixture<ProdctListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProdctListComponent]
    });
    fixture = TestBed.createComponent(ProdctListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
