import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LaMenteDetrasDeNUDO } from './la-mente-detras-de-nudo';

describe('LaMenteDetrasDeNUDO', () => {
  let component: LaMenteDetrasDeNUDO;
  let fixture: ComponentFixture<LaMenteDetrasDeNUDO>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LaMenteDetrasDeNUDO]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LaMenteDetrasDeNUDO);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('✅ debería crearse la vista del autor correctamente', () => {
    expect(component).toBeTruthy();
  });

  it('✅ debería mostrar la fotografía del CEO', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const img = compiled.querySelector('img.foto-autor');
    expect(img).toBeTruthy();
    expect(img?.getAttribute('src')).toContain('my_little_angel.jpg');
  });

  it('✅ debería contener la visión principal de blindar el talento creativo', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const contenido = compiled.textContent?.toLowerCase();
    expect(contenido).toContain('blindar el talento creativo');
  });

  it('✅ debería mostrar las instituciones educativas del socio', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain('TecNM Instituto Tecnológico de Durango');
    expect(compiled.textContent).toContain('TecNM Instituto Tecnológico de Iztapalapa III');
  });

  it('✅ debería incluir la frase inspiracional de Alphonse Elric', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const blockquote = compiled.querySelector('blockquote');
    expect(blockquote).toBeTruthy();
    expect(blockquote?.textContent).toContain('Alphonse Elric');
  });
});
