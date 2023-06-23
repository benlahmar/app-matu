import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetailsuserPage } from './detailsuser.page';

describe('DetailsuserPage', () => {
  let component: DetailsuserPage;
  let fixture: ComponentFixture<DetailsuserPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DetailsuserPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
