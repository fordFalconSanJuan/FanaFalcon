import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './carousel.html',
  styleUrls: ['./carousel.css']
})
export class Carousel implements OnInit, OnDestroy {
  @Input() highPriority = false;

  slides = [
    {imageUrl: 'assets/images/aerea.jpg', caption: 'Aerea'},
    {imageUrl: 'assets/images/aireLibre.jpg', caption: 'Aire Libre'},
    {imageUrl: 'assets/images/autos.jpg', caption: 'Autos'},
    {imageUrl: 'assets/images/caravana.jpg', caption: 'Caravana de Autos'},
    {imageUrl: 'assets/images/estacionados.jpg', caption: 'Autos Estacionados'},
    {imageUrl: 'assets/images/estacionamiento.jpg', caption: 'Autos en Estacionamiento'},
    {imageUrl: 'assets/images/fanaFalcon.jpg', caption: 'Fana Falcon'},
    { imageUrl: 'assets/images/fordFaunistico.jpg', caption: 'Autos en Parque' },
    { imageUrl: 'assets/images/falcon.jpg', caption: 'Ford Falcon' },
    { imageUrl: 'assets/images/villicum.jpg', caption: 'Autos en Villicum' }
  ];

  currentSlide = 0;
  private intervalId: any;

  ngOnInit() {
    if (this.slides.length > 1) {
      this.startAutoPlay();
    }
  }

  ngOnDestroy() {
    this.stopAutoPlay();
  }

  private startAutoPlay(): void {
    this.stopAutoPlay();
    this.intervalId = setInterval(() => this.nextSlide(), 4000);
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
    this.stopAutoPlay();
    this.startAutoPlay();
  }

  onMouseEnter(): void {
    this.stopAutoPlay();
  }

  onMouseLeave(): void {
    this.startAutoPlay();
  }
}
