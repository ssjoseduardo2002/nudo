import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneradorContrato } from './generador-contrato';

describe('GeneradorContrato', () => {
  let component: GeneradorContrato;
  let fixture: ComponentFixture<GeneradorContrato>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GeneradorContrato]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeneradorContrato);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
