import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SongCardsComponent } from './song-cards.component';

describe('CardComponent', () => {
  let component: SongCardsComponent;
  let fixture: ComponentFixture<SongCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SongCardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SongCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
