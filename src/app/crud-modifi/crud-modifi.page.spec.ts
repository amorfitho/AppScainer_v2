import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CrudModifiPage } from './crud-modifi.page';

describe('CrudModifiPage', () => {
  let component: CrudModifiPage;
  let fixture: ComponentFixture<CrudModifiPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudModifiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
