import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { BarraLateral } from './barra-lateral'; // Nombre corregido

describe('BarraLateral', () => {
  let component: BarraLateral;
  let fixture: ComponentFixture<BarraLateral>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      // Importamos la clase correcta aquí
      imports: [BarraLateral],
      providers: [provideRouter([])] 
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarraLateral);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debería crearse correctamente', () => {
    expect(component).toBeTruthy();
  });

  it('debería renderizar el logotipo de NUDO', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const img = compiled.querySelector('.logo-horizontal');
    expect(img).toBeTruthy();
    // Verificamos que apunte a tu imagen NUDO.jpg
    expect(img?.getAttribute('src')).toContain('NUDO.jpg');
  });

  it('debería mostrar el nombre del usuario (José)', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const nombre = compiled.querySelector('.nombre-user');
    expect(nombre?.textContent).toContain('José');
  });
});
