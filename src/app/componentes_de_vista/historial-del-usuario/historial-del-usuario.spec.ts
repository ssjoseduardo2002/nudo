import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistorialDelUsuario } from './historial-del-usuario';

describe('HistorialDelUsuario', () => {
  let component: HistorialDelUsuario;
  let fixture: ComponentFixture<HistorialDelUsuario>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HistorialDelUsuario]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistorialDelUsuario);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
