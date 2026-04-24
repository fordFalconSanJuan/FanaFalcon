import {Component} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-galeria',
  imports: [
    NgOptimizedImage
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
      description: "Vista aérea del club reunido en la plaza durante una de nuestras juntadas. Un momento que refleja el espíritu de comunidad y el amor compartido por el Ford Falcon."
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

  nextSlide(): void {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
  }

  prevSlide(): void {
    this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
  }

  goToSlide(index: number): void {
    this.currentSlide = index;
  }
}
