import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorContrato } from './editor-contrato';

describe('EditorContrato', () => {
  let component: EditorContrato;
  let fixture: ComponentFixture<EditorContrato>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditorContrato]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditorContrato);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
