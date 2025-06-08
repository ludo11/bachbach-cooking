import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnCoursDeConstruction } from './en-cours-de-construction';

describe('EnCoursDeConstruction', () => {
  let component: EnCoursDeConstruction;
  let fixture: ComponentFixture<EnCoursDeConstruction>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnCoursDeConstruction]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnCoursDeConstruction);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
