import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CentroAyuda } from './centro-ayuda';

describe('CentroAyuda', () => {
  let component: CentroAyuda;
  let fixture: ComponentFixture<CentroAyuda>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      // Como es Standalone, lo importamos directamente
      imports: [CentroAyuda]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CentroAyuda);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('✅ debería crearse el componente de Centro de Ayuda', () => {
    expect(component).toBeTruthy();
  });

  it('✅ debería mostrar el título de bienvenida al socio', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const h1 = compiled.querySelector('h1');
    expect(h1?.textContent).toContain('¿Cómo podemos ayudarte, socio?');
  });

  it('✅ debería renderizar las 3 categorías principales de ayuda', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const tarjetas = compiled.querySelectorAll('.tarjeta-ayuda');
    
    // Verificamos que existan las 3 secciones: Primeros Pasos, Legal y Pagos
    expect(tarjetas.length).toBe(3);
  });

  it('✅ debería tener operativa la barra de búsqueda', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const inputBusqueda = compiled.querySelector('input');
    const btnBuscar = compiled.querySelector('.btn-buscar');

    expect(inputBusqueda).toBeTruthy();
    expect(btnBuscar).toBeTruthy();
    expect(inputBusqueda?.getAttribute('placeholder')).toContain('Tutoriales');
  });

  it('✅ debería llamar a contactarSoporte() al hacer clic en el botón de ayuda directa', () => {
    // Espiamos la función para asegurar que el cableado con el TS sea correcto
    spyOn(component, 'contactarSoporte');

    const btnSoporte = fixture.nativeElement.querySelector('.btn-soporte-directo');
    btnSoporte.click();

    expect(component.contactarSoporte).toHaveBeenCalled();
  });
});
