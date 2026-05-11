import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Inicio } from './inicio';

describe('Inicio', () => {
  let component: Inicio;
  let fixture: ComponentFixture<Inicio>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      // Importamos RouterTestingModule porque el Dashboard tiene muchos enlaces (routerLink)
      imports: [Inicio, RouterTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Inicio);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('✅ debería crearse el Dashboard de Inicio', () => {
    expect(component).toBeTruthy();
  });

  it('✅ debería mostrar el nombre del socio en el saludo', () => {
    component.nombreUsuario = 'José';
    fixture.detectChanges();
    
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.nombre-ceo')?.textContent).toContain('José');
  });

  it('✅ debería renderizar las tarjetas de estadísticas (Contratos y Pendientes)', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const tarjetas = compiled.querySelectorAll('.tarjeta-stat');
    
    // Verificamos que al menos existan las 3 tarjetas informativas
    expect(tarjetas.length).toBeGreaterThanOrEqual(3);
  });

  it('✅ debería tener el acceso directo al Generador de Contratos', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const linkGenerador = compiled.querySelector('a[routerLink*="generador-contrato"]');
    
    expect(linkGenerador).toBeTruthy();
    expect(compiled.textContent).toContain('Nuevo Contrato');
  });

  it('✅ debería mostrar la alerta del contrato pendiente prioritario', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const alertaEspecial = compiled.querySelector('.tarjeta-stat.especial');
    
    expect(alertaEspecial).toBeTruthy();
    expect(compiled.textContent).toContain('Agencia Creativa');
  });
});
