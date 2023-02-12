import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewBreedComponent } from './view-breed.component';

describe('ViewBreedComponent', () => {
  let component: ViewBreedComponent;
  let fixture: ComponentFixture<ViewBreedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewBreedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewBreedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
