import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisorDocumento } from './visor-documento';

describe('VisorDocumento', () => {
  let component: VisorDocumento;
  let fixture: ComponentFixture<VisorDocumento>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VisorDocumento]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisorDocumento);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
