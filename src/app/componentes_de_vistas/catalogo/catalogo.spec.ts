import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Catalogo } from './catalogo';

describe('Catalogo', () => {
  let component: Catalogo;
  let fixture: ComponentFixture<Catalogo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      // Importamos RouterTestingModule porque el catálogo navega al generador
      imports: [Catalogo, RouterTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Catalogo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('✅ debería crearse el componente del Catálogo', () => {
    expect(component).toBeTruthy();
  });

  it('✅ debería renderizar la lista de contratos correctamente', () => {
    // Simulamos un par de contratos en el componente
    component.misContratos = [
      { id: 'NUDO-001', nombre: 'Contrato Freelance Noel', estado: 'Completado', fecha: '2026-05-10' },
      { id: 'NUDO-002', nombre: 'Acuerdo Confidencial José', estado: 'Pendiente', fecha: '2026-05-11' }
    ];
    
    fixture.detectChanges(); // Refrescamos la vista

    const compiled = fixture.nativeElement as HTMLElement;
    const tarjetas = compiled.querySelectorAll('.tarjeta-nudo:not(.tarjeta-vacia)');
    
    expect(tarjetas.length).toBe(2);
    expect(compiled.textContent).toContain('Contrato Freelance Noel');
  });

  it('✅ debería mostrar el badge de "Completado" con el estilo correcto', () => {
    component.misContratos = [
      { id: '123', nombre: 'Test', estado: 'Completado', fecha: 'hoy' }
    ];
    fixture.detectChanges();

    const badge = fixture.nativeElement.querySelector('.status-badge');
    expect(badge.classList).toContain('completado');
  });

  it('✅ debería tener siempre visible la tarjeta de "Asegurar nuevo proyecto"', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const tarjetaVacia = compiled.querySelector('.tarjeta-vacia');
    
    expect(tarjetaVacia).toBeTruthy();
    expect(compiled.textContent).toContain('Asegurar nuevo proyecto');
  });
});
