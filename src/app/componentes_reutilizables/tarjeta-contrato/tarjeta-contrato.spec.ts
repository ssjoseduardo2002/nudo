import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaContrato } from './tarjeta-contrato';

describe('TarjetaContrato', () => {
  let component: TarjetaContrato;
  let fixture: ComponentFixture<TarjetaContrato>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TarjetaContrato]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TarjetaContrato);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
