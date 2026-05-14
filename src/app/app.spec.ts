import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { App } from './app';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
      providers: [
        provideRouter([]) // Necesario para que el test no truene al buscar el <router-outlet>
      ]
    }).compileComponents();
  });

  it('✅ debería inicializar el motor central de NUDO (App)', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('✅ debería tener cargado el chasis principal (Layout)', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    
    // Verificamos que el contenedor principal exista
    expect(compiled.querySelector('.layout-principal')).toBeTruthy();
  });

  it('✅ debería renderizar el punto de entrada de rutas (Router Outlet)', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    
    // El router-outlet es vital para que las vistas funcionen
    expect(compiled.querySelector('router-outlet')).toBeTruthy();
  });
});