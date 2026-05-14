import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TarjetaContrato } from './tarjeta-contrato';
import { EtiquetaDeEstado } from '../etiqueta-de-estado/etiqueta-de-estado';

describe('TarjetaContrato', () => {
  let component: TarjetaContrato;
  let fixture: ComponentFixture<TarjetaContrato>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      // Importamos el componente y su dependencia (la etiqueta)
      imports: [TarjetaContrato, EtiquetaDeEstado]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TarjetaContrato);
    component = fixture.componentInstance;

    // Inyectamos un "mock" de contrato para que el test tenga qué leer
    component.contrato = {
      titulo: 'Desarrollo de App Móvil',
      folio: 'NUDO-2026-X8',
      cliente: 'Empresa Creativa S.A.',
      fecha: new Date(),
      monto: 50000,
      estado: 'Firmado',
      hashBlockchain: '0x123abc456def789ghi'
    };

    fixture.detectChanges();
  });

  it('✅ debería crearse la tarjeta de contrato correctamente', () => {
    expect(component).toBeTruthy();
  });

  it('✅ debería mostrar el título y el folio del contrato en el header', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const titulo = compiled.querySelector('.titulo-contrato')?.textContent;
    const folio = compiled.querySelector('.folio-contrato')?.textContent;

    expect(titulo).toContain('Desarrollo de App Móvil');
    expect(folio).toContain('NUDO-2026-X8');
  });

  it('✅ debería formatear correctamente el monto en moneda', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const monto = compiled.querySelector('.monto')?.textContent;
    
    // Verificamos que el Pipe de moneda de Angular haga su magia
    expect(monto).toContain('50,000.00');
  });

  it('✅ debería mostrar el fragmento del Hash si el estado es Blockchain', () => {
    component.contrato.estado = 'Blockchain';
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    const hash = compiled.querySelector('.hash-text');
    
    expect(hash).toBeTruthy();
  });

  it('✅ no debería mostrar el Hash si el estado es Pendiente', () => {
    component.contrato.estado = 'Pendiente';
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    const hash = compiled.querySelector('.hash-text');
    
    expect(hash).toBeFalsy();
  });
});
