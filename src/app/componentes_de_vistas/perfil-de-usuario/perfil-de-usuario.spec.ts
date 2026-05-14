import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { PerfilDeUsuario } from './perfil-de-usuario';

describe('PerfilDeUsuario', () => {
  let component: PerfilDeUsuario;
  let fixture: ComponentFixture<PerfilDeUsuario>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      // Importamos FormsModule para que el test reconozca [(ngModel)]
      imports: [PerfilDeUsuario, FormsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerfilDeUsuario);
    component = fixture.componentInstance;

    // Inicializamos un usuario de prueba
    component.usuario = {
      nombre: 'José',
      apellido: 'NUDO',
      email: 'jose@nudo.com',
      profesion: 'CEO',
      biografia: 'Blindando el talento.',
      nombreNegocio: '' // Iniciamos como perfil individual
    };

    fixture.detectChanges();
  });

  it('✅ debería crearse el componente de perfil correctamente', () => {
    expect(component).toBeTruthy();
  });

  it('✅ debería mostrar la inicial del nombre en el avatar', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const avatar = compiled.querySelector('.circulo-avatar');
    expect(avatar?.textContent).toContain('J');
  });

  it('✅ debería cambiar a "Cuenta Empresarial" cuando se asigne un nombre de negocio', () => {
    // Simulamos que el usuario escribe el nombre de su negocio
    component.usuario.nombreNegocio = 'NUDO Software S.A.';
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    const estadoTexto = compiled.querySelector('.estado-cuenta')?.textContent;
    const badgeNegocio = compiled.querySelector('.badge-negocio');

    expect(estadoTexto).toContain('Cuenta Empresarial');
    expect(badgeNegocio).toBeTruthy(); // El emoji 🏢 debería aparecer
  });

  it('✅ debería mantener el estado "Cuenta Individual" si el nombre de negocio está vacío', () => {
    component.usuario.nombreNegocio = '';
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    const estadoTexto = compiled.querySelector('.estado-cuenta')?.textContent;
    
    expect(estadoTexto).toContain('Cuenta Individual');
    expect(compiled.querySelector('.badge-negocio')).toBeFalsy();
  });

  it('✅ debería llamar al método guardarCambios() al enviar el formulario', () => {
    spyOn(component, 'guardarCambios');
    const formulario = fixture.nativeElement.querySelector('form');
    
    formulario.dispatchEvent(new Event('submit'));
    fixture.detectChanges();

    expect(component.guardarCambios).toHaveBeenCalled();
  });
});
