import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableItensComponent } from './table-itens.component';

describe('TableItensComponent', () => {
  let component: TableItensComponent;
  let fixture: ComponentFixture<TableItensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableItensComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableItensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
