import { Component, OnInit } from '@angular/core';
import { Libro } from 'src/app/models/libro.model';
import { LibroService } from 'src/app/services/libro.service';


@Component({
  selector: 'app-lista-libri',
  templateUrl: './lista-libri.component.html',
  styleUrls: ['./lista-libri.component.scss']
})
export class ListaLibriComponent {

  libri: Libro[];

  constructor(private libroService: LibroService) {}

  ngOnInit(): void {
    this.libroService.getLibri().subscribe({
      next: (response) => {
        this.libri = response;
      },
      error: (error) => {
        console.log(error);
      }
    })
  }
}
