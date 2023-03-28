import { Component, Input } from '@angular/core';
import { Libro } from 'src/app/models/libro.model';

@Component({
  selector: 'app-libro-card',
  templateUrl: './libro-card.component.html',
  styleUrls: ['./libro-card.component.scss']
})
export class LibroCardComponent {

  @Input() libri: Libro[];

}
