import { Component, OnInit } from '@angular/core';
import { Libro } from 'src/app/models/libro.model';
import { LibroService } from 'src/app/services/libro.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  libri: Libro[];

constructor(private libroService: LibroService) {}

  ngOnInit(): void {
    this.libroService.getLibri().subscribe({
      next: (response) => {
        this.libri = response;
        this.libri = this.libri.sort((a, b) => b._id - a._id).slice(0, 4);
      },
      error: (error) => {
        console.log(error);
      }
    })
  }

}
