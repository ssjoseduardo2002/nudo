import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing'; // Necesario para los [routerLink]
import { Encabezado } from './encabezado';

describe('Encabezado', () => {
  let component: Encabezado;
  let fixture: ComponentFixture<Encabezado>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      // Importamos RouterTestingModule porque nuestro encabezado tiene enlaces de navegación
      imports: [Encabezado, RouterTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Encabezado);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('✅ debería crearse el componente de encabezado', () => {
    expect(component).toBeTruthy();
  });

  it('✅ debería mostrar la identidad de marca (Emoji y Texto NUDO)', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const logoTexto = compiled.querySelector('.logo-texto');
    const logoSimbolo = compiled.querySelector('.logo-simbolo');
    
    expect(logoTexto?.textContent).toContain('NUDO');
    expect(logoSimbolo?.textContent).toBe('🪢');
  });

  it('✅ debería ocultar la navegación cuando estamos en la pantalla de Acceso', () => {
    // Simulamos que estamos en el login
    component.enPantallaAcceso = true;
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    const nav = compiled.querySelector('.navegacion-principal');
    
    expect(nav).toBeFalsy(); // El nav no debería existir en el DOM
  });

  it('✅ debería mostrar el botón destacado "La Mente Detrás"', () => {
    // Aseguramos que no estamos en acceso para ver el nav
    component.enPantallaAcceso = false;
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    const btnDestacado = compiled.querySelector('.btn-nav.destacado');
    
    expect(btnDestacado?.textContent).toContain('La Mente Detrás');
    expect(btnDestacado?.textContent).toContain('💡');
  });

  it('✅ debería tener el botón de ajustes de perfil con el icono de engrane', () => {
    component.enPantallaAcceso = false;
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    const btnAjustes = compiled.querySelector('.btn-ajustes');
    
    expect(btnAjustes).toBeTruthy();
    expect(btnAjustes?.querySelector('.icono-animado')?.textContent).toBe('⚙️');
  });
});