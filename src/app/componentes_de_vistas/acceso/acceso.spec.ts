import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms'; // Vital para probar ngModel
import { Acceso } from './acceso';

describe('Acceso', () => {
  let component: Acceso;
  let fixture: ComponentFixture<Acceso>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      // Importamos FormsModule para que el test reconozca los inputs vinculados
      imports: [Acceso, FormsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Acceso);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('✅ debería crearse el componente de Acceso', () => {
    expect(component).toBeTruthy();
  });

  it('✅ debería mostrar el mensaje de bienvenida dinámico', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const welcomeTitle = compiled.querySelector('h1');
    expect(welcomeTitle?.textContent).toContain('¡Hola de nuevo, socio!');
  });

  it('✅ debería vincular correctamente el correo y la contraseña (Data Binding)', () => {
    // Simulamos que el usuario escribe sus credenciales
    component.correo = 'ceo@nudo.com';
    component.contrasena = 'password123';
    
    fixture.detectChanges(); // Sincronizamos la vista

    const emailInput = fixture.nativeElement.querySelector('input[name="correo"]');
    const passInput = fixture.nativeElement.querySelector('input[name="contrasena"]');

    expect(emailInput.value).toBe('ceo@nudo.com');
    expect(passInput.value).toBe('password123');
  });

  it('✅ debería llamar al método onLogin() cuando se hace submit al formulario', () => {
    spyOn(component, 'onLogin'); // Ponemos un espía en la función
    
    const form = fixture.nativeElement.querySelector('form');
    form.dispatchEvent(new Event('submit')); // Disparamos el evento de envío

    expect(component.onLogin).toHaveBeenCalled();
  });

  it('✅ debería mostrar el badge de seguridad en el panel visual', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const securityBadge = compiled.querySelector('.badge-seguridad');
    expect(securityBadge?.textContent).toContain('Conexión Cifrada');
  });
});
