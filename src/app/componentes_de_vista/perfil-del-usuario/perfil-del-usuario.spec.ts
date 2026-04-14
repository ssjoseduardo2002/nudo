import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilDelUsuario } from './perfil-del-usuario';

describe('PerfilDelUsuario', () => {
  let component: PerfilDelUsuario;
  let fixture: ComponentFixture<PerfilDelUsuario>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PerfilDelUsuario]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerfilDelUsuario);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
