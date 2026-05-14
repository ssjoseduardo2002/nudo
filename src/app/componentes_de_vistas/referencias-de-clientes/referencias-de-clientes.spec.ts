import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReferenciasDeClientes } from './referencias-de-clientes';

describe('ReferenciasDeClientes', () => {
  let component: ReferenciasDeClientes;
  let fixture: ComponentFixture<ReferenciasDeClientes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReferenciasDeClientes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReferenciasDeClientes);
    component = fixture.componentInstance;

    // Inyectamos datos de prueba para que el *ngFor tenga qué renderizar
    component.referencias = [
      {
        cliente: 'Socio de Prueba',
        empresa: 'Empresa Test',
        comentario: 'NUDO blindó mi proyecto de maravilla.',
        idHash: 'HASH123',
        servicioAdquirido: 'Blindaje Pro'
      }
    ];

    fixture.detectChanges();
  });

  it('✅ debería crearse el muro de referencias correctamente', () => {
    expect(component).toBeTruthy();
  });

  it('✅ debería renderizar la lista de testimonios (ngFor)', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const cards = compiled.querySelectorAll('.card-testimonio');
    expect(cards.length).toBeGreaterThan(0);
  });

  it('✅ debería mostrar la inicial del cliente en el avatar', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const avatar = compiled.querySelector('.avatar-cliente');
    expect(avatar?.textContent).toContain('S'); // La 'S' de 'Socio de Prueba'
  });

  it('✅ debería mostrar el ID de Blockchain (Hash) en el footer de la card', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const footerText = compiled.querySelector('.fecha-registro')?.textContent;
    expect(footerText).toContain('HASH123');
  });

  it('✅ debería tener el botón de acción principal (CTA)', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const boton = compiled.querySelector('.btn-nudo-primario');
    expect(boton).toBeTruthy();
    expect(boton?.textContent).toContain('Blindar mi primer proyecto');
  });
});