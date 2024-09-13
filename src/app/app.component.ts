import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  trigger,
  transition,
  style,
  animate,
  query,
  group
} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    // Definir la animación para las transiciones entre páginas
    trigger('routeAnimations', [
      transition('* <=> *', [
        style({ transform: 'translateX(100%)', opacity: 0 }),
        animate('500ms ease-in-out', style({ transform: 'translateX(0)', opacity: 1 }))
      ]),
    ])
    
  ]
})
export class AppComponent {
  // Este método prepara la animación
  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
