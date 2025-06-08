import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuiSuisJe } from './qui-suis-je';

describe('QuiSuisJe', () => {
  let component: QuiSuisJe;
  let fixture: ComponentFixture<QuiSuisJe>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuiSuisJe]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuiSuisJe);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
