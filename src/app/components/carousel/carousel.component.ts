import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent {
  percorso = "../../../assets/images/carousel-";

  images = [
    {
      id: 1,
      label: 'Berserk'
    },
    {
      id: 2,
      label: 'Akira'
    },
    {
      id: 3,
      label: '20th Century Boys'
    },
    {
      id: 4,
      label: 'The Walking Dead'
    },
    {
      id: 5,
      label: 'One Piece'
    },
    {
      id: 6,
      label: 'Chainsaw Man'
    }
  ];
}
