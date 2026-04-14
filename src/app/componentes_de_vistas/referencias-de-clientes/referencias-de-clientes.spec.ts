import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferenciasDeClientes } from './referencias-de-clientes';

describe('ReferenciasDeClientes', () => {
  let component: ReferenciasDeClientes;
  let fixture: ComponentFixture<ReferenciasDeClientes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReferenciasDeClientes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReferenciasDeClientes);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
