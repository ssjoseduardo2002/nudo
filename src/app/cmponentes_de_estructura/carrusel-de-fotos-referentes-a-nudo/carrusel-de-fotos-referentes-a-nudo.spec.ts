import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarruselDeFotosReferentesANUDO } from './carrusel-de-fotos-referentes-a-nudo';

describe('CarruselDeFotosReferentesANUDO', () => {
  let component: CarruselDeFotosReferentesANUDO;
  let fixture: ComponentFixture<CarruselDeFotosReferentesANUDO>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarruselDeFotosReferentesANUDO]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarruselDeFotosReferentesANUDO);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
