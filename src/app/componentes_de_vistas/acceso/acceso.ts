import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-acceso',
  standalone: true,
  templateUrl: './acceso.html',
  styleUrls: ['./acceso.scss']
})
export class AccesoComponent {
  constructor(private router: Router) {}

  onLogin(): void {
    this.router.navigate(['/inicio']);
  }
}