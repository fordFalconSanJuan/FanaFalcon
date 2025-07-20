import { Component } from '@angular/core';
import {Carousel} from '../carousel/carousel';
import {NgOptimizedImage} from '@angular/common';


@Component({
  selector: 'app-main-page',
  imports: [
    Carousel,
    NgOptimizedImage
  ],
  templateUrl: './main-page.html',
  styleUrl: './main-page.css'
})
export class MainPage {

}
