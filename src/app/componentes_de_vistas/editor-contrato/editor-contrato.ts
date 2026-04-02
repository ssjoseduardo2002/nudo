import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editor-contrato',
  templateUrl: './editor-contrato.html',
  styleUrls: ['./editor-contrato.scss']
})
export class EditorContratoComponent implements OnInit {
  contratoFinal: any;

  ngOnInit() {
    // Recuperamos los datos enviados desde el generador
    this.contratoFinal = history.state.data || {
      nombreEmpresa: '______',
      nombreProfesionista: 'José'
    };
  }

  // Lógica para el botón "Exportar PDF" que vimos en el HTML
  exportarPDF() {
    console.log('Generando PDF para:', this.contratoFinal.nombreEmpresa);
    window.print(); // Solución rápida para previsualizar/guardar
  }
}