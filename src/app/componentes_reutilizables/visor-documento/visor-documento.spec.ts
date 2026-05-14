import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VisorDocumento } from './visor-documento';

describe('VisorDocumento', () => {
  let component: VisorDocumento;
  let fixture: ComponentFixture<VisorDocumento>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VisorDocumento]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisorDocumento);
    component = fixture.componentInstance;

    // Datos de prueba para el visor
    component.nombreDocumento = 'Contrato de Prestación de Servicios';
    component.folioDoc = 'ND-2026-001';
    component.hashBlockchain = '0xABC123DIFERENTE';
    
    fixture.detectChanges();
  });

  it('✅ debería crearse el visor de documentos correctamente', () => {
    expect(component).toBeTruthy();
  });

  it('✅ debería aumentar y disminuir el zoom dentro de los rangos permitidos', () => {
    const zoomInicial = component.nivelZoom;
    
    component.cambiarZoom(10);
    expect(component.nivelZoom).toBe(zoomInicial + 10);
    
    component.cambiarZoom(-20);
    expect(component.nivelZoom).toBe(zoomInicial - 10);
  });

  it('✅ no debería permitir un zoom menor al 50%', () => {
    component.nivelZoom = 50;
    component.cambiarZoom(-10);
    expect(component.nivelZoom).toBe(50);
  });

  it('✅ debería mostrar el folio y el hash correctamente en la interfaz', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.meta small')?.textContent).toContain('ND-2026-001');
    expect(compiled.querySelector('.sello-blockchain-header')?.textContent).toContain('0xABC123DIFERENTE');
  });

  it('✅ debería emitir el evento de cierre al llamar a cerrar()', () => {
    spyOn(component.onCerrar, 'emit');
    component.cerrar();
    expect(component.onCerrar.emit).toHaveBeenCalled();
  });

  it('✅ debería llamar a window.print() al ejecutar el método imprimir', () => {
    spyOn(window, 'print');
    component.imprimir();
    expect(window.print).toHaveBeenCalled();
  });
});
