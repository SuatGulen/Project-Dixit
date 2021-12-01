import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StorytellerComponent } from './storyteller.component';

describe('StorytellerComponent', () => {
  let component: StorytellerComponent;
  let fixture: ComponentFixture<StorytellerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StorytellerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StorytellerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
