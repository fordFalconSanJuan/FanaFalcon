import { Component } from '@angular/core';
import {Nav} from '../nav/nav';

@Component({
  selector: 'app-galeria',
  imports: [
  ],
  templateUrl: './galeria.html',
  styleUrl: './galeria.css'
})
export class Galeria {
  slides = [
    {
      imageUrl: 'assets/images/aerea.jpg',
      caption: 'Aerea',
      title: "Foto aérea en la plaza",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit cras mi fermentum, nunc cubilia commodo cursus metus sagittis mattis consequat senectus, libero laoreet massa condimentum magnis bibendum odio vestibulum magna. Habitasse class vestibulum blandit penatibus sagittis sed sodales, arcu magnis nulla potenti pretium commodo tempor, tristique aliquam nullam eget mus pharetra. Integer massa sagittis per sapien odio molestie himenaeos sem, tincidunt consequat in vitae laoreet nunc litora, nibh dictumst venenatis curae etiam feugiat facilisi.\n" +
        "\n" +
        "Integer eleifend maecenas condimentum rutrum proin suspendisse cursus, molestie habitasse euismod luctus ornare etiam, posuere in eget urna hendrerit praesent. Massa felis donec tortor quis conubia vulputate porttitor luctus iaculis, rhoncus nunc placerat molestie volutpat imperdiet ridiculus ad eros, libero urna at varius primis gravida dui laoreet. Torquent morbi nisl vestibulum ad luctus lacinia duis curae himenaeos, mauris taciti tempus id nulla eros mollis vivamus, quis proin rutrum laoreet vitae vel ornare elementum."
    },
    {
      imageUrl: 'assets/images/aireLibre.jpg',
      caption: 'Aire Libre',
      title: "Reunión al aire libre",
      description: "Reunión al aire libre"
    },
    {
      imageUrl: 'assets/images/autos.jpg',
      caption: 'Autos',
      title: "Autos en conjunto",
      description: "Autos en conjunto"
    },
    {
      imageUrl: 'assets/images/caravana.jpg',
      caption: 'Caravana de Autos',
      title: "Caravana de autos camino al Villicum",
      description: "Caravana de autos camino al Villicum"
    },
    {
      imageUrl: 'assets/images/estacionados.jpg',
      caption: 'Autos Estacionados',
      title: "Exposición de Ford",
      description: "Exposición de Ford"
    },
    {
      imageUrl: 'assets/images/estacionamiento.jpg',
      caption: 'Autos en Estacionamiento',
      title: "Copando estacionamiento",
      description: "Copando estacionamiento"
    },
    {
      imageUrl: 'assets/images/fanaFalcon.jpg',
      caption: 'Fana Falcon',
      title: "Nosotros, Fana Falcon",
      description: "Nosotros, Fana Falcon"
    },
    {
      imageUrl: 'assets/images/fordFaunistico.jpg',
      caption: 'Autos en Parque',
      title: "Evento en el parque faunístico del mes de abril",
      description: "Evento en el parque faunístico del mes de abril"
    },
    {
      imageUrl: 'assets/images/falcon.jpg',
      caption: 'Ford Falcon',
      title: "Modelo 78",
      description: "Modelo 78"
    },
    {
      imageUrl: 'assets/images/villicum.jpg',
      caption: 'Autos en Villicum',
      title: "Evento Nacional de Ford Falcon",
      description: "Evento Nacional de Ford Falcon"
    }
  ];

  currentSlide = 0;
  private intervalId: any;

  ngOnInit() {

  }

  ngOnDestroy() {

  }

  private stopAutoPlay(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }

  nextSlide(): void {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
  }

  prevSlide(): void {
    this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
  }

  goToSlide(index: number): void {
    this.currentSlide = index;
  }

  onMouseEnter(): void {

  }

  onMouseLeave(): void {

  }
}
