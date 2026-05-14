import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Footer } from './footer';

describe('Footer', () => {
  let component: Footer;
  let fixture: ComponentFixture<Footer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Footer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Footer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('✅ debería crearse el footer correctamente', () => {
    expect(component).toBeTruthy();
  });

  it('✅ debería mostrar el año actual en el copyright', () => {
    const añoActual = new Date().getFullYear().toString();
    const compiled = fixture.nativeElement as HTMLElement;
    const copyrightText = compiled.querySelector('.copyright p')?.textContent;
    
    expect(copyrightText).toContain(añoActual);
  });

  it('✅ debería contener el mensaje de protección legal de NUDO', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const slogan = compiled.querySelector('.columna-footer p')?.textContent;
    
    expect(slogan).toContain('Protección legal');
  });

  it('✅ debería disparar el método irAyuda() al hacer clic en soporte', () => {
    spyOn(component, 'irAyuda');
    const botonSoporte = fixture.nativeElement.querySelector('.enlace-soporte');
    
    botonSoporte.click();
    fixture.detectChanges();

    expect(component.irAyuda).toHaveBeenCalled();
  });

  it('✅ debería tener los enlaces legales presentes', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const enlaces = compiled.querySelectorAll('.columna-footer ul li a');
    
    expect(enlaces.length).toBeGreaterThanOrEqual(2);
    expect(enlaces[0].textContent).toContain('Términos');
  });
});
