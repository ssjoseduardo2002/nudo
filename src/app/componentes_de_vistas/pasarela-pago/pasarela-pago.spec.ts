import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasarelaPago } from './pasarela-pago.';

describe('PasarelaPago', () => {
  let component: PasarelaPago;
  let fixture: ComponentFixture<PasarelaPago>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PasarelaPago]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PasarelaPago);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
