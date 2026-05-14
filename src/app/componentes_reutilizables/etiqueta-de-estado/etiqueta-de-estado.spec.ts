import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EtiquetaDeEstado } from './etiqueta-de-estado';

describe('EtiquetaDeEstado', () => {
  let component: EtiquetaDeEstado;
  let fixture: ComponentFixture<EtiquetaDeEstado>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EtiquetaDeEstado]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EtiquetaDeEstado);
    component = fixture.componentInstance;
    
    // Estado inicial por defecto
    component.estado = 'Pendiente';
    fixture.detectChanges();
  });

  it('✅ debería crearse el componente de etiqueta', () => {
    expect(component).toBeTruthy();
  });

  it('✅ debería aplicar la clase CSS correcta según el estado', () => {
    component.estado = 'Firmado';
    fixture.detectChanges();
    
    const compiled = fixture.nativeElement as HTMLElement;
    const badge = compiled.querySelector('.badge-nudo');
    
    expect(badge?.classList).toContain('estado-firmado');
  });

  it('✅ debería mostrar el icono de "Blockchain" y el pulso de animación', () => {
    component.estado = 'Blockchain';
    fixture.detectChanges();
    
    const compiled = fixture.nativeElement as HTMLElement;
    const icono = compiled.querySelector('.icono-estado');
    const pulso = compiled.querySelector('.pulso');
    
    expect(icono?.textContent).toContain('⛓️');
    expect(pulso).toBeTruthy(); // El pulso solo debe existir en este estado
  });

  it('✅ no debería mostrar el pulso en el estado "Rechazado"', () => {
    component.estado = 'Rechazado';
    fixture.detectChanges();
    
    const compiled = fixture.nativeElement as HTMLElement;
    const pulso = compiled.querySelector('.pulso');
    
    expect(pulso).toBeFalsy();
  });

  it('✅ debería renderizar el texto del estado en mayúsculas o como venga el input', () => {
    const textoPrueba = 'En Revisión';
    component.estado = textoPrueba;
    fixture.detectChanges();
    
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain(textoPrueba);
  });
});
