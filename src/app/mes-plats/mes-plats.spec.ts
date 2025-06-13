import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MesPlats } from './mes-plats';

describe('MesPlats', () => {
  let component: MesPlats;
  let fixture: ComponentFixture<MesPlats>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MesPlats]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MesPlats);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
