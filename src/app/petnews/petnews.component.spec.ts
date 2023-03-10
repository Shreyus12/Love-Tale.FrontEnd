import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetnewsComponent } from './petnews.component';

describe('PetnewsComponent', () => {
  let component: PetnewsComponent;
  let fixture: ComponentFixture<PetnewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PetnewsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PetnewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
