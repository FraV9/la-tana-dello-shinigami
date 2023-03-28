import { Injectable } from "@angular/core";
import { Libro } from "../models/libro.model";
import { LIBRI } from "../mocks/libri.mock";
import { Observable, of } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LibroService {

  constructor() {}

  getLibri(): Observable<Libro[]> {
    return of (LIBRI);
  }


  getLibro(id: number): Observable<Libro> {
    const libro = LIBRI.find(libro => libro._id === id);
    return of (libro);
  }
}
