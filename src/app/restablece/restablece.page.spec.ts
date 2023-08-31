import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RestablecePage } from './restablece.page';

describe('RestablecePage', () => {
  let component: RestablecePage;
  let fixture: ComponentFixture<RestablecePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RestablecePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
