import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Encabezado } from './encabezado';

describe('Encabezado', () => {
  let component: Encabezado;
  let fixture: ComponentFixture<Encabezado>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Encabezado]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Encabezado);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debería crearse el componente de encabezado', () => {
    expect(component).toBeTruthy();
  });

  it('debería mostrar el título por defecto correctamente', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    // Buscamos el h1 que tiene el [innerText]
    const h1 = compiled.querySelector('h1');
    expect(h1?.innerText).toContain('Bienvenido a NUDO');
  });

  it('debería actualizar el subtítulo cuando cambia la propiedad', () => {
    const nuevoSubtitulo = 'Nueva frase de seguridad legal';
    component.subtitulo = nuevoSubtitulo;
    fixture.detectChanges(); // Forzamos a Angular a renderizar el cambio

    const compiled = fixture.nativeElement as HTMLElement;
    const p = compiled.querySelector('p');
    expect(p?.innerText).toBe(nuevoSubtitulo);
  });

  it('debería tener la estructura visual necesaria (decoración)', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const decoracion = compiled.querySelector('.circulo-decorativo');
    expect(decoracion).toBeTruthy();
  });
});