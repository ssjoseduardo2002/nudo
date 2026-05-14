import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { Buscador } from './buscador';

describe('Buscador', () => {
  let component: Buscador;
  let fixture: ComponentFixture<Buscador>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      // Importamos FormsModule para que el test no truene con el [(ngModel)]
      imports: [Buscador, FormsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Buscador);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('✅ debería crearse el buscador correctamente', () => {
    expect(component).toBeTruthy();
  });

  it('✅ debería limpiar el texto cuando se llama a limpiarBusqueda()', () => {
    component.terminoBusqueda = 'Contrato de Software';
    component.limpiarBusqueda();
    expect(component.terminoBusqueda).toBe('');
  });

  it('✅ debería emitir el término de búsqueda cuando el usuario escribe', fakeAsync(() => {
    spyOn(component.onBuscar, 'emit');
    
    component.terminoBusqueda = 'Blockchain';
    component.alBuscar();
    
    // Si metemos un debounce (espera) en el futuro, tick() nos ayuda
    tick(); 
    
    expect(component.onBuscar.emit).toHaveBeenCalledWith('Blockchain');
  }));

  it('✅ debería actualizar el término de búsqueda al seleccionar un filtro rápido', () => {
    const filtroPrueba = 'Firmado';
    component.setFiltro(filtroPrueba);
    
    expect(component.terminoBusqueda).toBe(filtroPrueba);
  });

  it('✅ el botón de limpiar solo debería existir si hay texto (DOM Check)', () => {
    component.terminoBusqueda = '';
    fixture.detectChanges();
    let btnClear = fixture.nativeElement.querySelector('.btn-clear');
    expect(btnClear).toBeFalsy();

    component.terminoBusqueda = 'Hola';
    fixture.detectChanges();
    btnClear = fixture.nativeElement.querySelector('.btn-clear');
    expect(btnClear).toBeTruthy();
  });
});
