import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditorContrato } from './editor-contrato';

describe('EditorContrato', () => {
  let component: EditorContrato;
  let fixture: ComponentFixture<EditorContrato>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditorContrato]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditorContrato);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('✅ debería crearse el editor de contratos', () => {
    expect(component).toBeTruthy();
  });

  it('✅ debería mostrar el ID de referencia del documento', () => {
    component.idContrato = '777-TEST';
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const refText = compiled.querySelector('.id-documento');
    expect(refText?.textContent).toContain('ND-2026-777-TEST');
  });

  it('✅ el cuerpo del contrato debería ser editable (contenteditable)', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const editableArea = compiled.querySelector('.cuerpo-legal');
    expect(editableArea?.getAttribute('contenteditable')).toBe('true');
  });

  it('✅ debería disparar el protocolo de "Enviar a Firma"', () => {
    spyOn(component, 'enviarAFirma'); // Espiamos la lógica de firma
    
    const btnFirma = fixture.nativeElement.querySelector('.btn-herramienta.destaque');
    btnFirma.click();

    expect(component.enviarAFirma).toHaveBeenCalled();
  });

  it('✅ debería tener habilitado el corrector ortográfico en el lienzo', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const areaLegal = compiled.querySelector('.cuerpo-legal');
    expect(areaLegal?.getAttribute('spellcheck')).toBe('true');
  });
});
