import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtiquetaDeEstado } from './etiqueta-de-estado';

describe('EtiquetaDeEstado', () => {
  let component: EtiquetaDeEstado;
  let fixture: ComponentFixture<EtiquetaDeEstado>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EtiquetaDeEstado]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EtiquetaDeEstado);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
