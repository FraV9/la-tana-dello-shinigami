import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Libro } from 'src/app/models/libro.model';
import { LibroService } from 'src/app/services/libro.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  libro: Libro;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private libroService: LibroService
  ) {}

  ngOnInit(): void {
    this.onGetLibro();
  }

  onGetLibro(): void {
    const id = Number(this.activatedRoute.snapshot.paramMap.get('_id'));

    this.libroService.getLibro(id).subscribe({
      next: (res) => {
        this.libro = res;
      },
      error: (err) => {
        console.log(err);
      }
    })
  }
}
