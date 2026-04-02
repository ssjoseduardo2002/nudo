import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  templateUrl: './footer.html',
  styleUrls: ['./footer.scss']
})
export class FooterComponent {
  constructor(private router: Router) {}

  // Esta función debe llamarse exactamente así para que el HTML la encuentre
  irAyuda(): void {
    this.router.navigate(['/centro-ayuda']);
  }
}