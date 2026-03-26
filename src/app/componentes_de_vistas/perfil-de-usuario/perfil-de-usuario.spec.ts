import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilDeUsuario } from './perfil-de-usuario';

describe('PerfilDeUsuario', () => {
  let component: PerfilDeUsuario;
  let fixture: ComponentFixture<PerfilDeUsuario>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PerfilDeUsuario]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerfilDeUsuario);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
