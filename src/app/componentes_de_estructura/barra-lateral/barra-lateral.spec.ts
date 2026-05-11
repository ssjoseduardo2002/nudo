import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { BarraLateral } from './barra-lateral';

describe('BarraLateral', () => {
  let component: BarraLateral;
  let fixture: ComponentFixture<BarraLateral>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      // Cargamos el componente standalone y las rutas de prueba
      imports: [BarraLateral],
      providers: [provideRouter([])] 
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarraLateral);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('✅ debería crearse la Sidebar correctamente', () => {
    expect(component).toBeTruthy();
  });

  it('✅ debería mostrar el branding renovado (Emoji 🪢 y Texto)', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const emoji = compiled.querySelector('.logo-emoji');
    const nombre = compiled.querySelector('.logo-nombre');
    
    expect(emoji?.textContent).toBe('🪢');
    expect(nombre?.textContent).toContain('NUDO');
  });

  it('✅ debería renderizar los elementos del menú dinámicamente', () => {
    // Definimos unos items de prueba en el componente
    component.menuItems = [
      { label: 'Dashboard', route: '/inicio', icon: '📊' },
      { label: 'Documentos', route: '/catalogo', icon: '📂' }
    ];
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    const links = compiled.querySelectorAll('.menu-link');
    
    // Verificamos que se creen los 2 del menú dinámico + 1 de "La mente detrás"
    expect(links.length).toBe(3); 
    expect(compiled.textContent).toContain('Dashboard');
    expect(compiled.textContent).toContain('📊');
  });

  it('✅ debería llamar a cerrarSesion() al hacer clic en el botón salir', () => {
    // Espiamos el método del componente
    spyOn(component, 'cerrarSesion');
    
    const compiled = fixture.nativeElement as HTMLElement;
    const btnSalir = compiled.querySelector('.btn-salir') as HTMLButtonElement;
    
    btnSalir.click();
    
    expect(component.cerrarSesion).toHaveBeenCalled();
  });
});
