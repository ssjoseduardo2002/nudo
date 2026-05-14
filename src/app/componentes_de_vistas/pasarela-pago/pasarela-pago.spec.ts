import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { PasarelaPago } from './pasarela-pago';

describe('PasarelaPago', () => {
  let component: PasarelaPago;
  let fixture: ComponentFixture<PasarelaPago>;

  // ... (resto del código anterior igual)

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PasarelaPago, FormsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PasarelaPago);
    component = fixture.componentInstance;

    // ✅ SOLUCIÓN: Modificamos las propiedades del plan en lugar del total directamente
    component.plan = { 
      nombre: 'Plan Blindaje Pro', 
      precio: 1000, 
      iva: 160 
    };
    
    // Ya no necesitas la línea component.total = 1160;
    
    fixture.detectChanges();
  });

// ... (resto de los tests)

  it('✅ debería crearse la pasarela de pago', () => {
    expect(component).toBeTruthy();
  });

  it('✅ debería iniciar con el método "tarjeta" por defecto', () => {
    expect(component.metodoSeleccionado).toBe('tarjeta');
  });

  it('✅ debería cambiar de formulario al seleccionar "paypal"', () => {
    component.metodoSeleccionado = 'paypal';
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    // Buscamos el texto que solo aparece en la sección de PayPal
    expect(compiled.textContent).toContain('PayPal');
    expect(compiled.querySelector('.btn-paypal-nudo')).toBeTruthy();
  });

  it('✅ debería mostrar los datos de transferencia cuando se selecciona ese método', () => {
    component.metodoSeleccionado = 'transferencia';
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain('Instrucciones de Transferencia');
    expect(compiled.querySelector('.datos-bancarios')).toBeTruthy();
  });

  it('✅ debería mostrar el total correcto en el ticket de compra', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const totalDisplay = compiled.querySelector('.monto-final')?.textContent;
    
    // Verificamos que el total formateado aparezca en el resumen
    expect(totalDisplay).toContain('1,160.00');
  });

  it('✅ debería llamar a procesarPago() al hacer clic en el botón de pagar', () => {
    spyOn(component, 'procesarPago');
    component.metodoSeleccionado = 'tarjeta';
    fixture.detectChanges();

    const boton = fixture.nativeElement.querySelector('.btn-pagar-nudo');
    boton.click();

    expect(component.procesarPago).toHaveBeenCalled();
  });
});