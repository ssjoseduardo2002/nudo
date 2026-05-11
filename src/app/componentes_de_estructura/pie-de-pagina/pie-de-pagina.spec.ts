import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { PieDePagina } from './pie-de-pagina';

describe('PieDePagina', () => {
  let component: PieDePagina;
  let fixture: ComponentFixture<PieDePagina>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      // Agregamos RouterTestingModule porque el footer tiene [routerLink]
      imports: [PieDePagina, RouterTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PieDePagina);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('✅ debería crearse el componente de Pie de Página', () => {
    expect(component).toBeTruthy();
  });

  it('✅ debería mostrar la identidad de marca NUDO en el footer', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const brandName = compiled.querySelector('.brand-name');
    const brandEmoji = compiled.querySelector('.brand-emoji');
    
    expect(brandName?.textContent).toContain('NUDO');
    expect(brandEmoji?.textContent).toBe('🪢');
  });

  it('✅ debería renderizar el indicador de sistema protegido (Pulse Dot)', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const pulseDot = compiled.querySelector('.pulse-dot');
    const statusText = compiled.querySelector('.status-text');
    
    expect(pulseDot).toBeTruthy();
    expect(statusText?.textContent).toBe('Sistemas En Línea');
  });

  it('✅ debería contener los enlaces legales obligatorios', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const links = compiled.querySelectorAll('.footer-link');
    const linksText = Array.from(links).map(link => link.textContent?.trim());
    
    expect(linksText).toContain('Privacidad');
    expect(linksText).toContain('Términos de Servicio');
    expect(linksText).toContain('Centro de Soporte');
  });

  it('✅ NO debería mostrarse si enPantallaAcceso es true', () => {
    component.enPantallaAcceso = true;
    fixture.detectChanges();
    
    const compiled = fixture.nativeElement as HTMLElement;
    const footerElement = compiled.querySelector('.footer-nudo');
    
    expect(footerElement).toBeFalsy();
  });
});
