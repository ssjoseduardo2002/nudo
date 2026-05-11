import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { GeneradorContrato } from './generador-contrato';

describe('GeneradorContrato', () => {
  let component: GeneradorContrato;
  let fixture: ComponentFixture<GeneradorContrato>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      // Importamos FormsModule por el ngModel y RouterTestingModule por el salto al editor
      imports: [GeneradorContrato, FormsModule, RouterTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeneradorContrato);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('✅ debería crearse el generador de contratos', () => {
    expect(component).toBeTruthy();
  });

  it('✅ debería iniciar en el paso 1', () => {
    expect(component.pasoActual).toBe(1);
  });

  it('✅ el botón "Continuar" debería estar deshabilitado si no hay tipo de contrato', () => {
    component.pasoActual = 1;
    component.datosContrato.tipo = '';
    fixture.detectChanges();

    const btnContinuar = fixture.nativeElement.querySelector('.btn-continuar');
    expect(btnContinuar.disabled).toBeTruthy();
  });

  it('✅ debería avanzar al paso 2 al llamar a siguientePaso()', () => {
    component.datosContrato.tipo = 'servicios';
    component.siguientePaso();
    expect(component.pasoActual).toBe(2);
  });

  it('✅ debería retroceder de paso al llamar a anteriorPaso()', () => {
    component.pasoActual = 2;
    component.anteriorPaso();
    expect(component.pasoActual).toBe(1);
  });

  it('✅ debería mostrar el resumen final en el paso 3', () => {
    component.pasoActual = 3;
    
    // CORRECCIÓN: Agregamos fechaEntrega para que coincida con la interfaz del .ts
    component.datosContrato = { 
      tipo: 'nda', 
      cliente: 'Noel', 
      monto: 5000,
      fechaEntrega: '2026-05-11' 
    };
    
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    // Usamos toUpperCase porque en el HTML tenemos el pipe | uppercase
    expect(compiled.textContent?.toUpperCase()).toContain('NDA');
    expect(compiled.textContent).toContain('Noel');
  });

  it('✅ debería llamar a finalizarGeneracion() al hacer clic en el último botón', () => {
    spyOn(component, 'finalizarGeneracion');
    component.pasoActual = 3;
    fixture.detectChanges();

    const btnFinalizar = fixture.nativeElement.querySelector('.btn-finalizar');
    btnFinalizar.click();

    expect(component.finalizarGeneracion).toHaveBeenCalled();
  });
});
