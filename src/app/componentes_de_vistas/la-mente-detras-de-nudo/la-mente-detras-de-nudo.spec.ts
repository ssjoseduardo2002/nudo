import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaMenteDetrasDeNUDO } from './la-mente-detras-de-nudo';

describe('LaMenteDetrasDeNUDO', () => {
  let component: LaMenteDetrasDeNUDO;
  let fixture: ComponentFixture<LaMenteDetrasDeNUDO>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LaMenteDetrasDeNUDO]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LaMenteDetrasDeNUDO);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
