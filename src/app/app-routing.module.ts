import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { LibriComponent } from './components/libri/libri.component';

import { ListaLibriComponent } from './components/libri/lista-libri/lista-libri.component';
import { DetailComponent } from './components/libri/detail/detail.component';

const routes: Routes = [
  {path:'', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'libreria', component: LibriComponent, children: [
    {path: 'dettaglio/:title/:_id', component: DetailComponent},
    {path: '', pathMatch: 'full', component: ListaLibriComponent}
  ]},


  {path: '**', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
