import {Component} from '@angular/core';
import {Carousel} from '../carousel/carousel';
import {NgForOf, NgIf, NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-albums',
  imports: [
    Carousel,
    NgOptimizedImage,
    NgForOf,
    NgIf
  ],
  templateUrl: './albums.html',
  styleUrl: './albums.css'
})
export class Albums {
  albums = [
    {
      title: 'Aniversario Fana Falcon 10 Años',
      photos: [
        { imageUrl: 'assets/images/aniversarioFanaFalcon10Anios/aniversariofanafalcon10anios1.webp', caption: 'Foto 1 Aniversario Fana Falcon 10 Años' },
        { imageUrl: 'assets/images/aniversarioFanaFalcon10Anios/aniversariofanafalcon10anios2.webp', caption: 'Foto 2 Aniversario Fana Falcon 10 Años' },
        { imageUrl: 'assets/images/aniversarioFanaFalcon10Anios/aniversariofanafalcon10anios3.webp', caption: 'Foto 3 Aniversario Fana Falcon 10 Años' },
        { imageUrl: 'assets/images/aniversarioFanaFalcon10Anios/aniversariofanafalcon10anios4.webp', caption: 'Foto 4 Aniversario Fana Falcon 10 Años' },
        { imageUrl: 'assets/images/aniversarioFanaFalcon10Anios/aniversariofanafalcon10anios5.webp', caption: 'Foto 5 Aniversario Fana Falcon 10 Años' },
        { imageUrl: 'assets/images/aniversarioFanaFalcon10Anios/aniversariofanafalcon10anios6.webp', caption: 'Foto 6 Aniversario Fana Falcon 10 Años' }
      ]
    },
    {
      title: 'Aniversario Fana Falcon 2025',
      photos: [
        { imageUrl: 'assets/images/aniversarioFanaFalcon2025/aniversario2025fanafalcon1.webp', caption: 'Foto 1 Aniversario Fana Falcon 2025' },
        { imageUrl: 'assets/images/aniversarioFanaFalcon2025/aniversario2025fanafalcon2.webp', caption: 'Foto 2 Aniversario Fana Falcon 2025' },
        { imageUrl: 'assets/images/aniversarioFanaFalcon2025/aniversario2025fanafalcon3.webp', caption: 'Foto 3 Aniversario Fana Falcon 2025' },
        { imageUrl: 'assets/images/aniversarioFanaFalcon2025/aniversario2025fanafalcon4.webp', caption: 'Foto 4 Aniversario Fana Falcon 2025' },
        { imageUrl: 'assets/images/aniversarioFanaFalcon2025/aniversario2025fanafalcon5.webp', caption: 'Foto 5 Aniversario Fana Falcon 2025' },
        { imageUrl: 'assets/images/aniversarioFanaFalcon2025/aniversario2025fanafalcon6.webp', caption: 'Foto 6 Aniversario Fana Falcon 2025' },
        { imageUrl: 'assets/images/aniversarioFanaFalcon2025/aniversario2025fanafalcon7.webp', caption: 'Foto 7 Aniversario Fana Falcon 2025' },
        { imageUrl: 'assets/images/aniversarioFanaFalcon2025/aniversario2025fanafalcon8.webp', caption: 'Foto 8 Aniversario Fana Falcon 2025' },
        { imageUrl: 'assets/images/aniversarioFanaFalcon2025/aniversario2025fanafalcon9.webp', caption: 'Foto 9 Aniversario Fana Falcon 2025' },
        { imageUrl: 'assets/images/aniversarioFanaFalcon2025/aniversario2025fanafalcon10.webp', caption: 'Foto 10 Aniversario Fana Falcon 2025' },
        { imageUrl: 'assets/images/aniversarioFanaFalcon2025/aniversario2025fanafalcon11.webp', caption: 'Foto 11 Aniversario Fana Falcon 2025' },
        { imageUrl: 'assets/images/aniversarioFanaFalcon2025/aniversario2025fanafalcon12.webp', caption: 'Foto 12 Aniversario Fana Falcon 2025' },
        { imageUrl: 'assets/images/aniversarioFanaFalcon2025/aniversario2025fanafalcon13.webp', caption: 'Foto 13 Aniversario Fana Falcon 2025' },
        { imageUrl: 'assets/images/aniversarioFanaFalcon2025/aniversario2025fanafalcon14.webp', caption: 'Foto 14 Aniversario Fana Falcon 2025' },
        { imageUrl: 'assets/images/aniversarioFanaFalcon2025/aniversario2025fanafalcon15.webp', caption: 'Foto 15 Aniversario Fana Falcon 2025' },
        { imageUrl: 'assets/images/aniversarioFanaFalcon2025/aniversario2025fanafalcon16.webp', caption: 'Foto 16 Aniversario Fana Falcon 2025' }
      ]
    },
    {
      title: 'Ayuda Solidaria Guanacache',
      photos: [
        { imageUrl: 'assets/images/ayudaSolidariaGuanacahe/ayudasolidariaguanacahe1.webp', caption: 'Foto 1 Ayuda solidaria Guanacache' },
        { imageUrl: 'assets/images/ayudaSolidariaGuanacahe/ayudasolidariaguanacahe2.webp', caption: 'Foto 2 Ayuda solidaria Guanacache' },
        { imageUrl: 'assets/images/ayudaSolidariaGuanacahe/ayudasolidariaguanacahe3.webp', caption: 'Foto 3 Ayuda solidaria Guanacache' }
      ]
    },
    {
      title: 'Banderazo Club Fiat 600',
      photos: [
        { imageUrl: 'assets/images/banderazoClubFiat600/clubfiat600banderazo1.webp', caption: 'Foto 1 Banderazo Club Fiat 600' }
      ]
    },
    {
      title: 'Desfile 9 de Julio',
      photos: [
        { imageUrl: 'assets/images/desfile9DeJulio/desfile9julio1.webp', caption: 'Foto 1 Desfile 9 de Julio' },
        { imageUrl: 'assets/images/desfile9DeJulio/desfile9julio2.webp', caption: 'Foto 2 Desfile 9 de Julio' },
        { imageUrl: 'assets/images/desfile9DeJulio/desfile9julio3.webp', caption: 'Foto 3 Desfile 9 de Julio' },
        { imageUrl: 'assets/images/desfile9DeJulio/desfile9julio4.webp', caption: 'Foto 4 Desfile 9 de Julio' },
        { imageUrl: 'assets/images/desfile9DeJulio/desfile9julio5.webp', caption: 'Foto 5 Desfile 9 de Julio' },
        { imageUrl: 'assets/images/desfile9DeJulio/desfile9julio6.webp', caption: 'Foto 6 Desfile 9 de Julio' },
        { imageUrl: 'assets/images/desfile9DeJulio/desfile9julio7.webp', caption: 'Foto 7 Desfile 9 de Julio' },
        { imageUrl: 'assets/images/desfile9DeJulio/desfile9julio8.webp', caption: 'Foto 8 Desfile 9 de Julio' }
      ]
    },
    {
      title: 'Donaciones Huaco',
      photos: [
        { imageUrl: 'assets/images/donacionesHuaco/donacioneshuaco1.webp', caption: 'Foto 1 Donaciones Huaco' },
        { imageUrl: 'assets/images/donacionesHuaco/donacioneshuaco2.webp', caption: 'Foto 2 Donaciones Huaco' },
        { imageUrl: 'assets/images/donacionesHuaco/donacioneshuaco3.webp', caption: 'Foto 3 Donaciones Huaco' },
        { imageUrl: 'assets/images/donacionesHuaco/donacioneshuaco4.webp', caption: 'Foto 4 Donaciones Huaco' },
        { imageUrl: 'assets/images/donacionesHuaco/donacioneshuaco5.webp', caption: 'Foto 5 Donaciones Huaco' },
        { imageUrl: 'assets/images/donacionesHuaco/donacioneshuaco6.webp', caption: 'Foto 6 Donaciones Huaco' },
        { imageUrl: 'assets/images/donacionesHuaco/donacioneshuaco7.webp', caption: 'Foto 7 Donaciones Huaco' },
        { imageUrl: 'assets/images/donacionesHuaco/donacioneshuaco8.webp', caption: 'Foto 8 Donaciones Huaco' },
        { imageUrl: 'assets/images/donacionesHuaco/donacioneshuaco9.webp', caption: 'Foto 9 Donaciones Huaco' },
        { imageUrl: 'assets/images/donacionesHuaco/donacioneshuaco10.webp', caption: 'Foto 10 Donaciones Huaco' },
        { imageUrl: 'assets/images/donacionesHuaco/donacioneshuaco11.webp', caption: 'Foto 11 Donaciones Huaco' },
        { imageUrl: 'assets/images/donacionesHuaco/donacioneshuaco12.webp', caption: 'Foto 12 Donaciones Huaco' },
        { imageUrl: 'assets/images/donacionesHuaco/donacioneshuaco13.webp', caption: 'Foto 13 Donaciones Huaco' },
        { imageUrl: 'assets/images/donacionesHuaco/donacioneshuaco14.webp', caption: 'Foto 14 Donaciones Huaco' },
        { imageUrl: 'assets/images/donacionesHuaco/donacioneshuaco15.webp', caption: 'Foto 15 Donaciones Huaco' },
        { imageUrl: 'assets/images/donacionesHuaco/donacioneshuaco16.webp', caption: 'Foto 16 Donaciones Huaco' },
        { imageUrl: 'assets/images/donacionesHuaco/donacioneshuaco17.webp', caption: 'Foto 17 Donaciones Huaco' },
        { imageUrl: 'assets/images/donacionesHuaco/donacioneshuaco18.webp', caption: 'Foto 18 Donaciones Huaco' },
        { imageUrl: 'assets/images/donacionesHuaco/donacioneshuaco19.webp', caption: 'Foto 19 Donaciones Huaco' },
        { imageUrl: 'assets/images/donacionesHuaco/donacioneshuaco20.webp', caption: 'Foto 20 Donaciones Huaco' },
        { imageUrl: 'assets/images/donacionesHuaco/donacioneshuaco21.webp', caption: 'Foto 21 Donaciones Huaco' },
        { imageUrl: 'assets/images/donacionesHuaco/donacioneshuaco22.webp', caption: 'Foto 22 Donaciones Huaco' },
        { imageUrl: 'assets/images/donacionesHuaco/donacioneshuaco23.webp', caption: 'Foto 23 Donaciones Huaco' },
        { imageUrl: 'assets/images/donacionesHuaco/donacioneshuaco24.webp', caption: 'Foto 24 Donaciones Huaco' },
        { imageUrl: 'assets/images/donacionesHuaco/donacioneshuaco25.webp', caption: 'Foto 25 Donaciones Huaco' },
        { imageUrl: 'assets/images/donacionesHuaco/donacioneshuaco26.webp', caption: 'Foto 26 Donaciones Huaco' },
        { imageUrl: 'assets/images/donacionesHuaco/donacioneshuaco27.webp', caption: 'Foto 27 Donaciones Huaco' },
        { imageUrl: 'assets/images/donacionesHuaco/donacioneshuaco28.webp', caption: 'Foto 28 Donaciones Huaco' },
        { imageUrl: 'assets/images/donacionesHuaco/donacioneshuaco29.webp', caption: 'Foto 29 Donaciones Huaco' },
        { imageUrl: 'assets/images/donacionesHuaco/donacioneshuaco30.webp', caption: 'Foto 30 Donaciones Huaco' },
        { imageUrl: 'assets/images/donacionesHuaco/donacioneshuaco31.webp', caption: 'Foto 31 Donaciones Huaco' },
        { imageUrl: 'assets/images/donacionesHuaco/donacioneshuaco32.webp', caption: 'Foto 32 Donaciones Huaco' },
        { imageUrl: 'assets/images/donacionesHuaco/donacioneshuaco33.webp', caption: 'Foto 33 Donaciones Huaco' },
        { imageUrl: 'assets/images/donacionesHuaco/donacioneshuaco34.webp', caption: 'Foto 34 Donaciones Huaco' },
        { imageUrl: 'assets/images/donacionesHuaco/donacioneshuaco35.webp', caption: 'Foto 35 Donaciones Huaco' },
        { imageUrl: 'assets/images/donacionesHuaco/donacioneshuaco36.webp', caption: 'Foto 36 Donaciones Huaco' }
      ]
    },
    {
      title: 'Expo Autos Clásicos Museo',
      photos: [
        { imageUrl: 'assets/images/expoAutosClasicosMuseo/expoautosclásicosmuseo1.webp', caption: 'Foto 1 Expo Autos Clásicos Museo' },
        { imageUrl: 'assets/images/expoAutosClasicosMuseo/expoautosclásicosmuseo2.webp', caption: 'Foto 2 Expo Autos Clásicos Museo' },
        { imageUrl: 'assets/images/expoAutosClasicosMuseo/expoautosclásicosmuseo3.webp', caption: 'Foto 3 Expo Autos Clásicos Museo' },
        { imageUrl: 'assets/images/expoAutosClasicosMuseo/expoautosclásicosmuseo4.webp', caption: 'Foto 4 Expo Autos Clásicos Museo' },
        { imageUrl: 'assets/images/expoAutosClasicosMuseo/expoautosclásicosmuseo5.webp', caption: 'Foto 5 Expo Autos Clásicos Museo' },
        { imageUrl: 'assets/images/expoAutosClasicosMuseo/expoautosclásicosmuseo6.webp', caption: 'Foto 6 Expo Autos Clásicos Museo' },
        { imageUrl: 'assets/images/expoAutosClasicosMuseo/expoautosclásicosmuseo7.webp', caption: 'Foto 7 Expo Autos Clásicos Museo' },
        { imageUrl: 'assets/images/expoAutosClasicosMuseo/expoautosclásicosmuseo8.webp', caption: 'Foto 8 Expo Autos Clásicos Museo' },
        { imageUrl: 'assets/images/expoAutosClasicosMuseo/expoautosclásicosmuseo9.webp', caption: 'Foto 9 Expo Autos Clásicos Museo' },
        { imageUrl: 'assets/images/expoAutosClasicosMuseo/expoautosclásicosmuseo10.webp', caption: 'Foto 10 Expo Autos Clásicos Museo' },
        { imageUrl: 'assets/images/expoAutosClasicosMuseo/expoautosclásicosmuseo11.webp', caption: 'Foto 11 Expo Autos Clásicos Museo' },
        { imageUrl: 'assets/images/expoAutosClasicosMuseo/expoautosclásicosmuseo12.webp', caption: 'Foto 12 Expo Autos Clásicos Museo' },
        { imageUrl: 'assets/images/expoAutosClasicosMuseo/expoautosclásicosmuseo13.webp', caption: 'Foto 13 Expo Autos Clásicos Museo' },
        { imageUrl: 'assets/images/expoAutosClasicosMuseo/expoautosclásicosmuseo14.webp', caption: 'Foto 14 Expo Autos Clásicos Museo' },
        { imageUrl: 'assets/images/expoAutosClasicosMuseo/expoautosclásicosmuseo15.webp', caption: 'Foto 15 Expo Autos Clásicos Museo' },
        { imageUrl: 'assets/images/expoAutosClasicosMuseo/expoautosclásicosmuseo16.webp', caption: 'Foto 16 Expo Autos Clásicos Museo' },
        { imageUrl: 'assets/images/expoAutosClasicosMuseo/expoautosclásicosmuseo17.webp', caption: 'Foto 17 Expo Autos Clásicos Museo' },
        { imageUrl: 'assets/images/expoAutosClasicosMuseo/expoautosclásicosmuseo18.webp', caption: 'Foto 18 Expo Autos Clásicos Museo' },
        { imageUrl: 'assets/images/expoAutosClasicosMuseo/expoautosclásicosmuseo19.webp', caption: 'Foto 19 Expo Autos Clásicos Museo' },
        { imageUrl: 'assets/images/expoAutosClasicosMuseo/expoautosclásicosmuseo20.webp', caption: 'Foto 20 Expo Autos Clásicos Museo' },
        { imageUrl: 'assets/images/expoAutosClasicosMuseo/expoautosclásicosmuseo21.webp', caption: 'Foto 21 Expo Autos Clásicos Museo' },
        { imageUrl: 'assets/images/expoAutosClasicosMuseo/expoautosclásicosmuseo22.webp', caption: 'Foto 22 Expo Autos Clásicos Museo' },
        { imageUrl: 'assets/images/expoAutosClasicosMuseo/expoautosclásicosmuseo23.webp', caption: 'Foto 23 Expo Autos Clásicos Museo' }
      ]
    },
    {
      title: 'Expo Chango Más',
      photos: [
        { imageUrl: 'assets/images/expoChangoMas/expochangomas1.webp', caption: 'Foto 1 Expo Chango Más' },
        { imageUrl: 'assets/images/expoChangoMas/expochangomas2.webp', caption: 'Foto 2 Expo Chango Más' },
        { imageUrl: 'assets/images/expoChangoMas/expochangomas3.webp', caption: 'Foto 3 Expo Chango Más' },
        { imageUrl: 'assets/images/expoChangoMas/expochangomas4.webp', caption: 'Foto 4 Expo Chango Más' },
        { imageUrl: 'assets/images/expoChangoMas/expochangomas5.webp', caption: 'Foto 5 Expo Chango Más' },
        { imageUrl: 'assets/images/expoChangoMas/expochangomas6.webp', caption: 'Foto 6 Expo Chango Más' },
        { imageUrl: 'assets/images/expoChangoMas/expochangomas7.webp', caption: 'Foto 7 Expo Chango Más' }
      ]
    },
    {
      title: 'Expo Complejo La Superiora',
      photos: [
        { imageUrl: 'assets/images/expoComplejoLaSuperiora/expocomplejolasuperiora1.webp', caption: 'Foto 1 Expo Complejo La Superiora' },
        { imageUrl: 'assets/images/expoComplejoLaSuperiora/expocomplejolasuperiora2.webp', caption: 'Foto 2 Expo Complejo La Superiora' },
        { imageUrl: 'assets/images/expoComplejoLaSuperiora/expocomplejolasuperiora3.webp', caption: 'Foto 3 Expo Complejo La Superiora' },
        { imageUrl: 'assets/images/expoComplejoLaSuperiora/expocomplejolasuperiora4.webp', caption: 'Foto 4 Expo Complejo La Superiora' },
        { imageUrl: 'assets/images/expoComplejoLaSuperiora/expocomplejolasuperiora5.webp', caption: 'Foto 5 Expo Complejo La Superiora' },
        { imageUrl: 'assets/images/expoComplejoLaSuperiora/expocomplejolasuperiora6.webp', caption: 'Foto 6 Expo Complejo La Superiora' },
        { imageUrl: 'assets/images/expoComplejoLaSuperiora/expocomplejolasuperiora7.webp', caption: 'Foto 7 Expo Complejo La Superiora' },
        { imageUrl: 'assets/images/expoComplejoLaSuperiora/expocomplejolasuperiora8.webp', caption: 'Foto 8 Expo Complejo La Superiora' },
        { imageUrl: 'assets/images/expoComplejoLaSuperiora/expocomplejolasuperiora9.webp', caption: 'Foto 9 Expo Complejo La Superiora' }
      ]
    },
    {
      title: 'Expo FanaFest 2025',
      photos: [
        { imageUrl: 'assets/images/expoFanaFest2025/expo2025fanafest1.webp',
          caption: 'Foto 1 Expo FanaFest 2025' },
        { imageUrl: 'assets/images/expoFanaFest2025/expo2025fanafest2.webp',
          caption: 'Foto 2 Expo FanaFest 2025' },
        { imageUrl: 'assets/images/expoFanaFest2025/expo2025fanafest3.webp',
          caption: 'Foto 3 Expo FanaFest 2025' },
        { imageUrl: 'assets/images/expoFanaFest2025/expo2025fanafest4.webp',
          caption: 'Foto 4 Expo FanaFest 2025' },
        { imageUrl: 'assets/images/expoFanaFest2025/expo2025fanafest5.webp',
          caption: 'Foto 5 Expo FanaFest 2025' },
        { imageUrl: 'assets/images/expoFanaFest2025/expo2025fanafest6.webp',
          caption: 'Foto 6 Expo FanaFest 2025' },
        { imageUrl: 'assets/images/expoFanaFest2025/expo2025fanafest7.webp',
          caption: 'Foto 7 Expo FanaFest 2025' },
        { imageUrl: 'assets/images/expoFanaFest2025/expo2025fanafest8.webp',
          caption: 'Foto 8 Expo FanaFest 2025' },
        { imageUrl: 'assets/images/expoFanaFest2025/expo2025fanafest9.webp',
          caption: 'Foto 9 Expo FanaFest 2025' },
        { imageUrl: 'assets/images/expoFanaFest2025/expo2025fanafest10.webp',
          caption: 'Foto 10 Expo FanaFest 2025' },
        { imageUrl: 'assets/images/expoFanaFest2025/expo2025fanafest11.webp',
          caption: 'Foto 11 Expo FanaFest 2025' },
        { imageUrl: 'assets/images/expoFanaFest2025/expo2025fanafest12.webp',
          caption: 'Foto 12 Expo FanaFest 2025' },
        { imageUrl: 'assets/images/expoFanaFest2025/expo2025fanafest13.webp',
          caption: 'Foto 13 Expo FanaFest 2025' },
        { imageUrl: 'assets/images/expoFanaFest2025/expo2025fanafest14.webp',
          caption: 'Foto 14 Expo FanaFest 2025' },
        { imageUrl: 'assets/images/expoFanaFest2025/expo2025fanafest15.webp',
          caption: 'Foto 15 Expo FanaFest 2025' },
        { imageUrl: 'assets/images/expoFanaFest2025/expo2025fanafest16.webp',
          caption: 'Foto 16 Expo FanaFest 2025' },
        { imageUrl: 'assets/images/expoFanaFest2025/expo2025fanafest17.webp',
          caption: 'Foto 17 Expo FanaFest 2025' },
        { imageUrl: 'assets/images/expoFanaFest2025/expo2025fanafest18.webp',
          caption: 'Foto 18 Expo FanaFest 2025' },
        { imageUrl: 'assets/images/expoFanaFest2025/expo2025fanafest19.webp',
          caption: 'Foto 19 Expo FanaFest 2025' },
        { imageUrl: 'assets/images/expoFanaFest2025/expo2025fanafest20.webp',
          caption: 'Foto 20 Expo FanaFest 2025' },
        { imageUrl: 'assets/images/expoFanaFest2025/expo2025fanafest21.webp',
          caption: 'Foto 21 Expo FanaFest 2025' },
        { imageUrl: 'assets/images/expoFanaFest2025/expo2025fanafest22.webp',
          caption: 'Foto 22 Expo FanaFest 2025' },
        { imageUrl: 'assets/images/expoFanaFest2025/expo2025fanafest23.webp',
          caption: 'Foto 23 Expo FanaFest 2025' },
        { imageUrl: 'assets/images/expoFanaFest2025/expo2025fanafest24.webp',
          caption: 'Foto 24 Expo FanaFest 2025' },
        { imageUrl: 'assets/images/expoFanaFest2025/expo2025fanafest25.webp',
          caption: 'Foto 25 Expo FanaFest 2025' },
        { imageUrl: 'assets/images/expoFanaFest2025/expo2025fanafest26.webp',
          caption: 'Foto 26 Expo FanaFest 2025' },
        { imageUrl: 'assets/images/expoFanaFest2025/expo2025fanafest27.webp',
          caption: 'Foto 27 Expo FanaFest 2025' },
        { imageUrl: 'assets/images/expoFanaFest2025/expo2025fanafest28.webp',
          caption: 'Foto 28 Expo FanaFest 2025' },
        { imageUrl: 'assets/images/expoFanaFest2025/expo2025fanafest29.webp',
          caption: 'Foto 29 Expo FanaFest 2025' },
        { imageUrl: 'assets/images/expoFanaFest2025/expo2025fanafest30.webp',
          caption: 'Foto 30 Expo FanaFest 2025' },
        { imageUrl: 'assets/images/expoFanaFest2025/expo2025fanafest31.webp',
          caption: 'Foto 31 Expo FanaFest 2025' },
        { imageUrl: 'assets/images/expoFanaFest2025/expo2025fanafest32.webp',
          caption: 'Foto 32 Expo FanaFest 2025' },
        { imageUrl: 'assets/images/expoFanaFest2025/expo2025fanafest33.webp',
          caption: 'Foto 33 Expo FanaFest 2025' },
        { imageUrl: 'assets/images/expoFanaFest2025/expo2025fanafest34.webp',
          caption: 'Foto 34 Expo FanaFest 2025' },
        { imageUrl: 'assets/images/expoFanaFest2025/expo2025fanafest35.webp',
          caption: 'Foto 35 Expo FanaFest 2025' },
        { imageUrl: 'assets/images/expoFanaFest2025/expo2025fanafest36.webp',
          caption: 'Foto 36 Expo FanaFest 2025' },
        { imageUrl: 'assets/images/expoFanaFest2025/expo2025fanafest37.webp',
          caption: 'Foto 37 Expo FanaFest 2025' },
        { imageUrl: 'assets/images/expoFanaFest2025/expo2025fanafest38.webp',
          caption: 'Foto 38 Expo FanaFest 2025' },
        { imageUrl: 'assets/images/expoFanaFest2025/expo2025fanafest39.webp',
          caption: 'Foto 39 Expo FanaFest 2025' },
        { imageUrl: 'assets/images/expoFanaFest2025/expo2025fanafest40.webp',
          caption: 'Foto 40 Expo FanaFest 2025' },
        { imageUrl: 'assets/images/expoFanaFest2025/expo2025fanafest41.webp',
          caption: 'Foto 41 Expo FanaFest 2025' },
        { imageUrl: 'assets/images/expoFanaFest2025/expo2025fanafest42.webp',
          caption: 'Foto 42 Expo FanaFest 2025' },
        { imageUrl: 'assets/images/expoFanaFest2025/expo2025fanafest43.webp',
          caption: 'Foto 43 Expo FanaFest 2025' },
        { imageUrl: 'assets/images/expoFanaFest2025/expo2025fanafest44.webp',
          caption: 'Foto 44 Expo FanaFest 2025' },
        { imageUrl: 'assets/images/expoFanaFest2025/expo2025fanafest45.webp',
          caption: 'Foto 45 Expo FanaFest 2025' },
        { imageUrl: 'assets/images/expoFanaFest2025/expo2025fanafest46.webp',
          caption: 'Foto 46 Expo FanaFest 2025' },
        { imageUrl: 'assets/images/expoFanaFest2025/expo2025fanafest47.webp',
          caption: 'Foto 47 Expo FanaFest 2025' },
        { imageUrl: 'assets/images/expoFanaFest2025/expo2025fanafest48.webp',
          caption: 'Foto 48 Expo FanaFest 2025' },
        { imageUrl: 'assets/images/expoFanaFest2025/expo2025fanafest49.webp',
          caption: 'Foto 49 Expo FanaFest 2025' },
        { imageUrl: 'assets/images/expoFanaFest2025/expo2025fanafest50.webp',
          caption: 'Foto 50 Expo FanaFest 2025' },
        { imageUrl: 'assets/images/expoFanaFest2025/expo2025fanafest51.webp',
          caption: 'Foto 51 Expo FanaFest 2025' },
        { imageUrl: 'assets/images/expoFanaFest2025/expo2025fanafest52.webp',
          caption: 'Foto 52 Expo FanaFest 2025' },
        { imageUrl: 'assets/images/expoFanaFest2025/expo2025fanafest53.webp',
          caption: 'Foto 53 Expo FanaFest 2025' },
        { imageUrl: 'assets/images/expoFanaFest2025/expo2025fanafest54.webp',
          caption: 'Foto 54 Expo FanaFest 2025' },
        { imageUrl: 'assets/images/expoFanaFest2025/expo2025fanafest55.webp',
          caption: 'Foto 55 Expo FanaFest 2025' },
        { imageUrl: 'assets/images/expoFanaFest2025/expo2025fanafest56.webp',
          caption: 'Foto 56 Expo FanaFest 2025' },
        { imageUrl: 'assets/images/expoFanaFest2025/expo2025fanafest57.webp',
          caption: 'Foto 57 Expo FanaFest 2025' },
        { imageUrl: 'assets/images/expoFanaFest2025/expo2025fanafest58.webp',
          caption: 'Foto 58 Expo FanaFest 2025' },
        { imageUrl: 'assets/images/expoFanaFest2025/expo2025fanafest59.webp',
          caption: 'Foto 59 Expo FanaFest 2025' },
        { imageUrl: 'assets/images/expoFanaFest2025/expo2025fanafest60.webp',
          caption: 'Foto 60 Expo FanaFest 2025' },
        { imageUrl: 'assets/images/expoFanaFest2025/expo2025fanafest61.webp',
          caption: 'Foto 61 Expo FanaFest 2025' },
        { imageUrl: 'assets/images/expoFanaFest2025/expo2025fanafest62.webp',
          caption: 'Foto 62 Expo FanaFest 2025' },
        { imageUrl: 'assets/images/expoFanaFest2025/expo2025fanafest63.webp',
          caption: 'Foto 63 Expo FanaFest 2025' },
        { imageUrl: 'assets/images/expoFanaFest2025/expo2025fanafest64.webp',
          caption: 'Foto 64 Expo FanaFest 2025' },
        { imageUrl: 'assets/images/expoFanaFest2025/expo2025fanafest65.webp',
          caption: 'Foto 65 Expo FanaFest 2025' },
        { imageUrl: 'assets/images/expoFanaFest2025/expo2025fanafest66.webp',
          caption: 'Foto 66 Expo FanaFest 2025' },
        { imageUrl: 'assets/images/expoFanaFest2025/expo2025fanafest67.webp',
          caption: 'Foto 67 Expo FanaFest 2025' },
        { imageUrl: 'assets/images/expoFanaFest2025/expo2025fanafest68.webp',
          caption: 'Foto 68 Expo FanaFest 2025' },
        { imageUrl: 'assets/images/expoFanaFest2025/expo2025fanafest69.webp',
          caption: 'Foto 69 Expo FanaFest 2025' },
        { imageUrl: 'assets/images/expoFanaFest2025/expo2025fanafest70.webp',
          caption: 'Foto 70 Expo FanaFest 2025' },
        { imageUrl: 'assets/images/expoFanaFest2025/expo2025fanafest71.webp',
          caption: 'Foto 71 Expo FanaFest 2025' },
        { imageUrl: 'assets/images/expoFanaFest2025/expo2025fanafest72.webp',
          caption: 'Foto 72 Expo FanaFest 2025' },
        { imageUrl: 'assets/images/expoFanaFest2025/expo2025fanafest73.webp',
          caption: 'Foto 73 Expo FanaFest 2025' },
        { imageUrl: 'assets/images/expoFanaFest2025/expo2025fanafest74.webp',
          caption: 'Foto 74 Expo FanaFest 2025' },
        { imageUrl: 'assets/images/expoFanaFest2025/expo2025fanafest75.webp',
          caption: 'Foto 75 Expo FanaFest 2025' },
        { imageUrl: 'assets/images/expoFanaFest2025/expo2025fanafest76.webp',
          caption: 'Foto 76 Expo FanaFest 2025' },
        { imageUrl: 'assets/images/expoFanaFest2025/expo2025fanafest77.webp',
          caption: 'Foto 77 Expo FanaFest 2025' },
        { imageUrl: 'assets/images/expoFanaFest2025/expo2025fanafest78.webp',
          caption: 'Foto 78 Expo FanaFest 2025' },
        { imageUrl: 'assets/images/expoFanaFest2025/expo2025fanafest79.webp',
          caption: 'Foto 79 Expo FanaFest 2025' },
        { imageUrl: 'assets/images/expoFanaFest2025/expo2025fanafest80.webp',
          caption: 'Foto 80 Expo FanaFest 2025' },
        { imageUrl: 'assets/images/expoFanaFest2025/expo2025fanafest81.webp',
          caption: 'Foto 81 Expo FanaFest 2025' },
        { imageUrl: 'assets/images/expoFanaFest2025/expo2025fanafest82.webp',
          caption: 'Foto 82 Expo FanaFest 2025' },
        { imageUrl: 'assets/images/expoFanaFest2025/expo2025fanafest83.webp',
          caption: 'Foto 83 Expo FanaFest 2025' },
        { imageUrl: 'assets/images/expoFanaFest2025/expo2025fanafest84.webp',
          caption: 'Foto 84 Expo FanaFest 2025' },
        { imageUrl: 'assets/images/expoFanaFest2025/expo2025fanafest85.webp',
          caption: 'Foto 85 Expo FanaFest 2025' },
        { imageUrl: 'assets/images/expoFanaFest2025/expo2025fanafest86.webp',
          caption: 'Foto 86 Expo FanaFest 2025' },
        { imageUrl: 'assets/images/expoFanaFest2025/expo2025fanafest87.webp',
          caption: 'Foto 87 Expo FanaFest 2025' },
        { imageUrl: 'assets/images/expoFanaFest2025/expo2025fanafest88.webp',
          caption: 'Foto 88 Expo FanaFest 2025' },
        { imageUrl: 'assets/images/expoFanaFest2025/expo2025fanafest89.webp',
          caption: 'Foto 89 Expo FanaFest 2025' },
        { imageUrl: 'assets/images/expoFanaFest2025/expo2025fanafest90.webp',
          caption: 'Foto 90 Expo FanaFest 2025' },
        { imageUrl: 'assets/images/expoFanaFest2025/expo2025fanafest91.webp',
          caption: 'Foto 91 Expo FanaFest 2025' },
        { imageUrl: 'assets/images/expoFanaFest2025/expo2025fanafest92.webp',
          caption: 'Foto 92 Expo FanaFest 2025' },
        { imageUrl: 'assets/images/expoFanaFest2025/expo2025fanafest93.webp',
          caption: 'Foto 93 Expo FanaFest 2025' },
        { imageUrl: 'assets/images/expoFanaFest2025/expo2025fanafest94.webp',
          caption: 'Foto 94 Expo FanaFest 2025' },
        { imageUrl: 'assets/images/expoFanaFest2025/expo2025fanafest95.webp',
          caption: 'Foto 95 Expo FanaFest 2025' },
        { imageUrl: 'assets/images/expoFanaFest2025/expo2025fanafest96.webp',
          caption: 'Foto 96 Expo FanaFest 2025' },
        { imageUrl: 'assets/images/expoFanaFest2025/expo2025fanafest97.webp',
          caption: 'Foto 97 Expo FanaFest 2025' },
        { imageUrl: 'assets/images/expoFanaFest2025/expo2025fanafest98.webp',
          caption: 'Foto 98 Expo FanaFest 2025' },
        { imageUrl: 'assets/images/expoFanaFest2025/expo2025fanafest99.webp',
          caption: 'Foto 99 Expo FanaFest 2025' },
        { imageUrl: 'assets/images/expoFanaFest2025/expo2025fanafest100.webp',
          caption: 'Foto 100 Expo FanaFest 2025' },
        { imageUrl: 'assets/images/expoFanaFest2025/expo2025fanafest101.webp',
          caption: 'Foto 101 Expo FanaFest 2025' },
        { imageUrl: 'assets/images/expoFanaFest2025/expo2025fanafest102.webp',
          caption: 'Foto 102 Expo FanaFest 2025' },
        { imageUrl: 'assets/images/expoFanaFest2025/expo2025fanafest103.webp',
          caption: 'Foto 103 Expo FanaFest 2025' },
        { imageUrl: 'assets/images/expoFanaFest2025/expo2025fanafest104.webp',
          caption: 'Foto 104 Expo FanaFest 2025' },
        { imageUrl: 'assets/images/expoFanaFest2025/expo2025fanafest105.webp',
          caption: 'Foto 105 Expo FanaFest 2025' },
        { imageUrl: 'assets/images/expoFanaFest2025/expo2025fanafest106.webp',
          caption: 'Foto 106 Expo FanaFest 2025' },
        { imageUrl: 'assets/images/expoFanaFest2025/expo2025fanafest107.webp',
          caption: 'Foto 107 Expo FanaFest 2025' },
        { imageUrl: 'assets/images/expoFanaFest2025/expo2025fanafest108.webp',
          caption: 'Foto 108 Expo FanaFest 2025' },
        { imageUrl: 'assets/images/expoFanaFest2025/expo2025fanafest109.webp',
          caption: 'Foto 109 Expo FanaFest 2025' },
        { imageUrl: 'assets/images/expoFanaFest2025/expo2025fanafest110.webp',
          caption: 'Foto 110 Expo FanaFest 2025' },
        { imageUrl: 'assets/images/expoFanaFest2025/expo2025fanafest111.webp',
          caption: 'Foto 111 Expo FanaFest 2025' },
        { imageUrl: 'assets/images/expoFanaFest2025/expo2025fanafest112.webp',
          caption: 'Foto 112 Expo FanaFest 2025' },
        { imageUrl: 'assets/images/expoFanaFest2025/expo2025fanafest113.webp',
          caption: 'Foto 113 Expo FanaFest 2025' },
        { imageUrl: 'assets/images/expoFanaFest2025/expo2025fanafest114.webp',
          caption: 'Foto 114 Expo FanaFest 2025' },
        { imageUrl: 'assets/images/expoFanaFest2025/expo2025fanafest115.webp',
          caption: 'Foto 115 Expo FanaFest 2025' },
        { imageUrl: 'assets/images/expoFanaFest2025/expo2025fanafest116.webp',
          caption: 'Foto 116 Expo FanaFest 2025' },
        { imageUrl: 'assets/images/expoFanaFest2025/expo2025fanafest117.webp',
          caption: 'Foto 117 Expo FanaFest 2025' },
        { imageUrl: 'assets/images/expoFanaFest2025/expo2025fanafest118.webp',
          caption: 'Foto 118 Expo FanaFest 2025' },
        { imageUrl: 'assets/images/expoFanaFest2025/expo2025fanafest119.webp',
          caption: 'Foto 119 Expo FanaFest 2025' },
        { imageUrl: 'assets/images/expoFanaFest2025/expo2025fanafest120.webp',
          caption: 'Foto 120 Expo FanaFest 2025' },
        { imageUrl: 'assets/images/expoFanaFest2025/expo2025fanafest121.webp',
          caption: 'Foto 121 Expo FanaFest 2025' },
        { imageUrl: 'assets/images/expoFanaFest2025/expo2025fanafest122.webp',
          caption: 'Foto 122 Expo FanaFest 2025' },
        { imageUrl: 'assets/images/expoFanaFest2025/expo2025fanafest123.webp',
          caption: 'Foto 123 Expo FanaFest 2025' },
        { imageUrl: 'assets/images/expoFanaFest2025/expo2025fanafest124.webp',
          caption: 'Foto 124 Expo FanaFest 2025' },
        { imageUrl: 'assets/images/expoFanaFest2025/expo2025fanafest125.webp',
          caption: 'Foto 125 Expo FanaFest 2025' },
        { imageUrl: 'assets/images/expoFanaFest2025/expo2025fanafest126.webp',
          caption: 'Foto 126 Expo FanaFest 2025' },
        { imageUrl: 'assets/images/expoFanaFest2025/expo2025fanafest127.webp',
          caption: 'Foto 127 Expo FanaFest 2025' },
        { imageUrl: 'assets/images/expoFanaFest2025/expo2025fanafest128.webp',
          caption: 'Foto 128 Expo FanaFest 2025' },
        { imageUrl: 'assets/images/expoFanaFest2025/expo2025fanafest129.webp',
          caption: 'Foto 129 Expo FanaFest 2025' },
        { imageUrl: 'assets/images/expoFanaFest2025/expo2025fanafest130.webp',
          caption: 'Foto 130 Expo FanaFest 2025' },
        { imageUrl: 'assets/images/expoFanaFest2025/expo2025fanafest131.webp',
          caption: 'Foto 131 Expo FanaFest 2025' },
        { imageUrl: 'assets/images/expoFanaFest2025/expo2025fanafest132.webp',
          caption: 'Foto 132 Expo FanaFest 2025' },
        { imageUrl: 'assets/images/expoFanaFest2025/expo2025fanafest133.webp',
          caption: 'Foto 133 Expo FanaFest 2025' }
      ]
    },
    {
      title: 'Expo José Dolores',
      photos: [
        { imageUrl: 'assets/images/expoJoseDolores/expojosedolores1.webp', caption: 'Foto 1 Expo José Dolores' },
        { imageUrl: 'assets/images/expoJoseDolores/expojosedolores2.webp', caption: 'Foto 1 Expo José Dolores' }
      ]
    },
    {
      title: 'Expo Regional Ullum',
      photos: [
        { imageUrl: 'assets/images/expoRegionalUllum/exporegionalullum1.webp', caption: 'Foto 1 Expo Regional Ullum' },
        { imageUrl: 'assets/images/expoRegionalUllum/exporegionalullum2.webp', caption: 'Foto 2 Expo Regional Ullum' },
        { imageUrl: 'assets/images/expoRegionalUllum/exporegionalullum3.webp', caption: 'Foto 3 Expo Regional Ullum' },
        { imageUrl: 'assets/images/expoRegionalUllum/exporegionalullum4.webp', caption: 'Foto 4 Expo Regional Ullum' },
        { imageUrl: 'assets/images/expoRegionalUllum/exporegionalullum5.webp', caption: 'Foto 5 Expo Regional Ullum' }
      ]
    },
    {
      title: 'Expo solidaria Club Caivo',
      photos: [
        { imageUrl: 'assets/images/expoSolidariaClubCaivo/exposolidariaclubcaivo1.webp', caption: 'Foto 1 Expo solidaria Club Caivo' },
        { imageUrl: 'assets/images/expoSolidariaClubCaivo/exposolidariaclubcaivo2.webp', caption: 'Foto 2 Expo solidaria Club Caivo' }
      ]
    },
    {
      title: 'Expo Solidaria Cochaubal Sur',
      photos: [
        { imageUrl: 'assets/images/expoSolidariaCochahualSur/exposolidariacochahualsur10.webp', caption: 'Foto 10 Expo Solidaria Cochaubal Sur' },
        { imageUrl: 'assets/images/expoSolidariaCochahualSur/exposolidariacochahualsur1.webp', caption: 'Foto 1 Expo Solidaria Cochaubal Sur' },
        { imageUrl: 'assets/images/expoSolidariaCochahualSur/exposolidariacochahualsur2.webp', caption: 'Foto 2 Expo Solidaria Cochaubal Sur' },
        { imageUrl: 'assets/images/expoSolidariaCochahualSur/exposolidariacochahualsur3.webp', caption: 'Foto 3 Expo Solidaria Cochaubal Sur' },
        { imageUrl: 'assets/images/expoSolidariaCochahualSur/exposolidariacochahualsur4.webp', caption: 'Foto 4 Expo Solidaria Cochaubal Sur' },
        { imageUrl: 'assets/images/expoSolidariaCochahualSur/exposolidariacochahualsur5.webp', caption: 'Foto 5 Expo Solidaria Cochaubal Sur' },
        { imageUrl: 'assets/images/expoSolidariaCochahualSur/exposolidariacochahualsur6.webp', caption: 'Foto 6 Expo Solidaria Cochaubal Sur' },
        { imageUrl: 'assets/images/expoSolidariaCochahualSur/exposolidariacochahualsur7.webp', caption: 'Foto 7 Expo Solidaria Cochaubal Sur' },
        { imageUrl: 'assets/images/expoSolidariaCochahualSur/exposolidariacochahualsur8.webp', caption: 'Foto 8 Expo Solidaria Cochaubal Sur' },
        { imageUrl: 'assets/images/expoSolidariaCochahualSur/exposolidariacochahualsur9.webp', caption: 'Foto 9 Expo Solidaria Cochaubal Sur' },
        { imageUrl: 'assets/images/expoSolidariaCochahualSur/exposolidariacochahualsur11.webp', caption: 'Foto 11 Expo Solidaria Cochaubal Sur' }
      ]
    },
    {
      title: 'Expo Solidaria Motos',
      photos: [
        { imageUrl: 'assets/images/expoSolidariaMotos/exposolidariamotos6.webp', caption: 'Foto 6 Expo Solidaria Motos' },
        { imageUrl: 'assets/images/expoSolidariaMotos/exposolidariamotos1.webp', caption: 'Foto 1 Expo Solidaria Motos' },
        { imageUrl: 'assets/images/expoSolidariaMotos/exposolidariamotos2.webp', caption: 'Foto 2 Expo Solidaria Motos' },
        { imageUrl: 'assets/images/expoSolidariaMotos/exposolidariamotos3.webp', caption: 'Foto 3 Expo Solidaria Motos' },
        { imageUrl: 'assets/images/expoSolidariaMotos/exposolidariamotos4.webp', caption: 'Foto 4 Expo Solidaria Motos' },
        { imageUrl: 'assets/images/expoSolidariaMotos/exposolidariamotos5.webp', caption: 'Foto 5 Expo Solidaria Motos' },
        { imageUrl: 'assets/images/expoSolidariaMotos/exposolidariamotos7.webp', caption: 'Foto 7 Expo Solidaria Motos' },
        { imageUrl: 'assets/images/expoSolidariaMotos/exposolidariamotos8.webp', caption: 'Foto 8 Expo Solidaria Motos' }
      ]
    },
    {
      title: 'Juntada Mensual Albardón',
      photos: [
        { imageUrl: 'assets/images/juntadaMensualAlbardon/juntadamensualalbardon1.webp', caption: 'Foto 1 Juntada Mensual Albardón' },
        { imageUrl: 'assets/images/juntadaMensualAlbardon/juntadamensualalbardon2.webp', caption: 'Foto 2 Juntada Mensual Albardón' },
        { imageUrl: 'assets/images/juntadaMensualAlbardon/juntadamensualalbardon3.webp', caption: 'Foto 3 Juntada Mensual Albardón' },
        { imageUrl: 'assets/images/juntadaMensualAlbardon/juntadamensualalbardon4.webp', caption: 'Foto 4 Juntada Mensual Albardón' },
        { imageUrl: 'assets/images/juntadaMensualAlbardon/juntadamensualalbardon5.webp', caption: 'Foto 5 Juntada Mensual Albardón' }
      ]
    },
    {
      title: 'Juntada Mensual Parque de Chimbas',
      photos: [
        { imageUrl: 'assets/images/juntadaMensualParqueChimbas/juntadamensualparquechimbas1.webp', caption: 'Foto 1 Juntada Mensual Parque de Chimbas' },
        { imageUrl: 'assets/images/juntadaMensualParqueChimbas/juntadamensualparquechimbas2.webp', caption: 'Foto 2 Juntada Mensual Parque de Chimbas' },
        { imageUrl: 'assets/images/juntadaMensualParqueChimbas/juntadamensualparquechimbas3.webp', caption: 'Foto 3 Juntada Mensual Parque de Chimbas' },
        { imageUrl: 'assets/images/juntadaMensualParqueChimbas/juntadamensualparquechimbas4.webp', caption: 'Foto 4 Juntada Mensual Parque de Chimbas' },
        { imageUrl: 'assets/images/juntadaMensualParqueChimbas/juntadamensualparquechimbas5.webp', caption: 'Foto 5 Juntada Mensual Parque de Chimbas' },
        { imageUrl: 'assets/images/juntadaMensualParqueChimbas/juntadamensualparquechimbas6.webp', caption: 'Foto 6 Juntada Mensual Parque de Chimbas' },
        { imageUrl: 'assets/images/juntadaMensualParqueChimbas/juntadamensualparquechimbas7.webp', caption: 'Foto 7 Juntada Mensual Parque de Chimbas' },
        { imageUrl: 'assets/images/juntadaMensualParqueChimbas/juntadamensualparquechimbas8.webp', caption: 'Foto 8 Juntada Mensual Parque de Chimbas' },
        { imageUrl: 'assets/images/juntadaMensualParqueChimbas/juntadamensualparquechimbas9.webp', caption: 'Foto 9 Juntada Mensual Parque de Chimbas' },
        { imageUrl: 'assets/images/juntadaMensualParqueChimbas/juntadamensualparquechimbas10.webp', caption: 'Foto 10 Juntada Mensual Parque de Chimbas' },
        { imageUrl: 'assets/images/juntadaMensualParqueChimbas/juntadamensualparquechimbas11.webp', caption: 'Foto 11 Juntada Mensual Parque de Chimbas' },
        { imageUrl: 'assets/images/juntadaMensualParqueChimbas/juntadamensualparquechimbas12.webp', caption: 'Foto 12 Juntada Mensual Parque de Chimbas' },
        { imageUrl: 'assets/images/juntadaMensualParqueChimbas/juntadamensualparquechimbas13.webp', caption: 'Foto 13 Juntada Mensual Parque de Chimbas' },
        { imageUrl: 'assets/images/juntadaMensualParqueChimbas/juntadamensualparquechimbas14.webp', caption: 'Foto 14 Juntada Mensual Parque de Chimbas' },
        { imageUrl: 'assets/images/juntadaMensualParqueChimbas/juntadamensualparquechimbas15.webp', caption: 'Foto 15 Juntada Mensual Parque de Chimbas' },
        { imageUrl: 'assets/images/juntadaMensualParqueChimbas/juntadamensualparquechimbas16.webp', caption: 'Foto 16 Juntada Mensual Parque de Chimbas' },
        { imageUrl: 'assets/images/juntadaMensualParqueChimbas/juntadamensualparquechimbas17.webp', caption: 'Foto 17 Juntada Mensual Parque de Chimbas' },
        { imageUrl: 'assets/images/juntadaMensualParqueChimbas/juntadamensualparquechimbas18.webp', caption: 'Foto 18 Juntada Mensual Parque de Chimbas' },
        { imageUrl: 'assets/images/juntadaMensualParqueChimbas/juntadamensualparquechimbas19.webp', caption: 'Foto 19 Juntada Mensual Parque de Chimbas' },
        { imageUrl: 'assets/images/juntadaMensualParqueChimbas/juntadamensualparquechimbas20.webp', caption: 'Foto 20 Juntada Mensual Parque de Chimbas' },
        { imageUrl: 'assets/images/juntadaMensualParqueChimbas/juntadamensualparquechimbas21.webp', caption: 'Foto 21 Juntada Mensual Parque de Chimbas' },
        { imageUrl: 'assets/images/juntadaMensualParqueChimbas/juntadamensualparquechimbas22.webp', caption: 'Foto 22 Juntada Mensual Parque de Chimbas' },
        { imageUrl: 'assets/images/juntadaMensualParqueChimbas/juntadamensualparquechimbas23.webp', caption: 'Foto 23 Juntada Mensual Parque de Chimbas' },
        { imageUrl: 'assets/images/juntadaMensualParqueChimbas/juntadamensualparquechimbas24.webp', caption: 'Foto 24 Juntada Mensual Parque de Chimbas' },
        { imageUrl: 'assets/images/juntadaMensualParqueChimbas/juntadamensualparquechimbas25.webp', caption: 'Foto 25 Juntada Mensual Parque de Chimbas' },
        { imageUrl: 'assets/images/juntadaMensualParqueChimbas/juntadamensualparquechimbas26.webp', caption: 'Foto 26 Juntada Mensual Parque de Chimbas' },
        { imageUrl: 'assets/images/juntadaMensualParqueChimbas/juntadamensualparquechimbas27.webp', caption: 'Foto 27 Juntada Mensual Parque de Chimbas' },
        { imageUrl: 'assets/images/juntadaMensualParqueChimbas/juntadamensualparquechimbas28.webp', caption: 'Foto 28 Juntada Mensual Parque de Chimbas' },
        { imageUrl: 'assets/images/juntadaMensualParqueChimbas/juntadamensualparquechimbas29.webp', caption: 'Foto 29 Juntada Mensual Parque de Chimbas' }
      ]
    },
    {
      title: 'Juntada Mensual Parque de Rivadavia',
      photos: [
        { imageUrl: 'assets/images/juntadaMensualParqueRivadavia/juntadamensualparquerivadavia1.webp', caption: 'Foto 1 Juntada Mensual Parque de Rivadavia' },
        { imageUrl: 'assets/images/juntadaMensualParqueRivadavia/juntadamensualparquerivadavia2.webp', caption: 'Foto 2 Juntada Mensual Parque de Rivadavia' },
        { imageUrl: 'assets/images/juntadaMensualParqueRivadavia/juntadamensualparquerivadavia3.webp', caption: 'Foto 3 Juntada Mensual Parque de Rivadavia' },
        { imageUrl: 'assets/images/juntadaMensualParqueRivadavia/juntadamensualparquerivadavia4.webp', caption: 'Foto 4 Juntada Mensual Parque de Rivadavia' },
        { imageUrl: 'assets/images/juntadaMensualParqueRivadavia/juntadamensualparquerivadavia5.webp', caption: 'Foto 5 Juntada Mensual Parque de Rivadavia' },
        { imageUrl: 'assets/images/juntadaMensualParqueRivadavia/juntadamensualparquerivadavia6.webp', caption: 'Foto 6 Juntada Mensual Parque de Rivadavia' },
        { imageUrl: 'assets/images/juntadaMensualParqueRivadavia/juntadamensualparquerivadavia7.webp', caption: 'Foto 7 Juntada Mensual Parque de Rivadavia' },
        { imageUrl: 'assets/images/juntadaMensualParqueRivadavia/juntadamensualparquerivadavia8.webp', caption: 'Foto 8 Juntada Mensual Parque de Rivadavia' },
        { imageUrl: 'assets/images/juntadaMensualParqueRivadavia/juntadamensualparquerivadavia9.webp', caption: 'Foto 9 Juntada Mensual Parque de Rivadavia' },
        { imageUrl: 'assets/images/juntadaMensualParqueRivadavia/juntadamensualparquerivadavia10.webp', caption: 'Foto 10 Juntada Mensual Parque de Rivadavia' },
        { imageUrl: 'assets/images/juntadaMensualParqueRivadavia/juntadamensualparquerivadavia11.webp', caption: 'Foto 11 Juntada Mensual Parque de Rivadavia' },
        { imageUrl: 'assets/images/juntadaMensualParqueRivadavia/juntadamensualparquerivadavia12.webp', caption: 'Foto 12 Juntada Mensual Parque de Rivadavia' },
        { imageUrl: 'assets/images/juntadaMensualParqueRivadavia/juntadamensualparquerivadavia13.webp', caption: 'Foto 13 Juntada Mensual Parque de Rivadavia' },
        { imageUrl: 'assets/images/juntadaMensualParqueRivadavia/juntadamensualparquerivadavia14.webp', caption: 'Foto 14 Juntada Mensual Parque de Rivadavia' },
        { imageUrl: 'assets/images/juntadaMensualParqueRivadavia/juntadamensualparquerivadavia15.webp', caption: 'Foto 15 Juntada Mensual Parque de Rivadavia' }
      ]
    },
    {
      title: 'Locro Chimbas Norte',
      photos: [
        { imageUrl: 'assets/images/locroChimbasNorte/locrochimbasnorte1.webp', caption: 'Foto 1 Locro Chimbas Norte' },
        { imageUrl: 'assets/images/locroChimbasNorte/locrochimbasnorte2.webp', caption: 'Foto 2 Locro Chimbas Norte' },
        { imageUrl: 'assets/images/locroChimbasNorte/locrochimbasnorte3.webp', caption: 'Foto 3 Locro Chimbas Norte' }
      ]
    },
    {
      title: 'Nacional del Estanciero y Baqueano',
      photos: [
        { imageUrl: 'assets/images/nacionalEstancieroBaqueano/nacionalestancierobaqueano1.webp', caption: 'Foto 1 Nacional del Estanciero y Baqueano' },
        { imageUrl: 'assets/images/nacionalEstancieroBaqueano/nacionalestancierobaqueano2.webp', caption: 'Foto 2 Nacional del Estanciero y Baqueano' },
        { imageUrl: 'assets/images/nacionalEstancieroBaqueano/nacionalestancierobaqueano3.webp', caption: 'Foto 3 Nacional del Estanciero y Baqueano' },
        { imageUrl: 'assets/images/nacionalEstancieroBaqueano/nacionalestancierobaqueano4.webp', caption: 'Foto 4 Nacional del Estanciero y Baqueano' },
        { imageUrl: 'assets/images/nacionalEstancieroBaqueano/nacionalestancierobaqueano5.webp', caption: 'Foto 5 Nacional del Estanciero y Baqueano' },
        { imageUrl: 'assets/images/nacionalEstancieroBaqueano/nacionalestancierobaqueano6.webp', caption: 'Foto 6 Nacional del Estanciero y Baqueano' },
        { imageUrl: 'assets/images/nacionalEstancieroBaqueano/nacionalestancierobaqueano7.webp', caption: 'Foto 7 Nacional del Estanciero y Baqueano' },
        { imageUrl: 'assets/images/nacionalEstancieroBaqueano/nacionalestancierobaqueano8.webp', caption: 'Foto 8 Nacional del Estanciero y Baqueano' },
        { imageUrl: 'assets/images/nacionalEstancieroBaqueano/nacionalestancierobaqueano9.webp', caption: 'Foto 9 Nacional del Estanciero y Baqueano' },
        { imageUrl: 'assets/images/nacionalEstancieroBaqueano/nacionalestancierobaqueano10.webp', caption: 'Foto 10 Nacional del Estanciero y Baqueano' },
        { imageUrl: 'assets/images/nacionalEstancieroBaqueano/nacionalestancierobaqueano11.webp', caption: 'Foto 11 Nacional del Estanciero y Baqueano' },
        { imageUrl: 'assets/images/nacionalEstancieroBaqueano/nacionalestancierobaqueano12.webp', caption: 'Foto 12 Nacional del Estanciero y Baqueano' },
        { imageUrl: 'assets/images/nacionalEstancieroBaqueano/nacionalestancierobaqueano13.webp', caption: 'Foto 13 Nacional del Estanciero y Baqueano' },
        { imageUrl: 'assets/images/nacionalEstancieroBaqueano/nacionalestancierobaqueano14.webp', caption: 'Foto 14 Nacional del Estanciero y Baqueano' }
      ]
    },
    {
      title: 'Nacional Tucumán',
      photos: [
        { imageUrl: 'assets/images/nacionalTucuman/nacionaltucuman1.webp', caption: 'Foto 1 Nacional Tucumán' },
        { imageUrl: 'assets/images/nacionalTucuman/nacionaltucuman2.webp', caption: 'Foto 2 Nacional Tucumán' },
        { imageUrl: 'assets/images/nacionalTucuman/nacionaltucuman3.webp', caption: 'Foto 3 Nacional Tucumán' },
        { imageUrl: 'assets/images/nacionalTucuman/nacionaltucuman4.webp', caption: 'Foto 4 Nacional Tucumán' },
        { imageUrl: 'assets/images/nacionalTucuman/nacionaltucuman5.webp', caption: 'Foto 5 Nacional Tucumán' },
        { imageUrl: 'assets/images/nacionalTucuman/nacionaltucuman6.webp', caption: 'Foto 6 Nacional Tucumán' }
      ]
    },
    {
      title: 'Nacional 2023',
      photos: [
        { imageUrl: 'assets/images/nacional2023/nacional2023n1.webp', caption: 'Foto 1 Nacional 2023' },
        { imageUrl: 'assets/images/nacional2023/nacional2023n2.webp', caption: 'Foto 2 Nacional 2023' },
        { imageUrl: 'assets/images/nacional2023/nacional2023n3.webp', caption: 'Foto 3 Nacional 2023' },
        { imageUrl: 'assets/images/nacional2023/nacional2023n4.webp', caption: 'Foto 4 Nacional 2023' },
        { imageUrl: 'assets/images/nacional2023/nacional2023n5.webp', caption: 'Foto 5 Nacional 2023' },
        { imageUrl: 'assets/images/nacional2023/nacional2023n6.webp', caption: 'Foto 6 Nacional 2023' },
        { imageUrl: 'assets/images/nacional2023/nacional2023n7.webp', caption: 'Foto 7 Nacional 2023' },
        { imageUrl: 'assets/images/nacional2023/nacional2023n8.webp', caption: 'Foto 8 Nacional 2023' },
        { imageUrl: 'assets/images/nacional2023/nacional2023n9.webp', caption: 'Foto 9 Nacional 2023' },
        { imageUrl: 'assets/images/nacional2023/nacional2023n10.webp', caption: 'Foto 10 Nacional 2023' },
        { imageUrl: 'assets/images/nacional2023/nacional2023n11.webp', caption: 'Foto 11 Nacional 2023' },
        { imageUrl: 'assets/images/nacional2023/nacional2023n12.webp', caption: 'Foto 12 Nacional 2023' },
        { imageUrl: 'assets/images/nacional2023/nacional2023n13.webp', caption: 'Foto 13 Nacional 2023' },
        { imageUrl: 'assets/images/nacional2023/nacional2023n14.webp', caption: 'Foto 14 Nacional 2023' },
        { imageUrl: 'assets/images/nacional2023/nacional2023n15.webp', caption: 'Foto 15 Nacional 2023' },
        { imageUrl: 'assets/images/nacional2023/nacional2023n16.webp', caption: 'Foto 16 Nacional 2023' },
        { imageUrl: 'assets/images/nacional2023/nacional2023n17.webp', caption: 'Foto 17 Nacional 2023' },
        { imageUrl: 'assets/images/nacional2023/nacional2023n18.webp', caption: 'Foto 18 Nacional 2023' },
        { imageUrl: 'assets/images/nacional2023/nacional2023n19.webp', caption: 'Foto 19 Nacional 2023' },
        { imageUrl: 'assets/images/nacional2023/nacional2023n20.webp', caption: 'Foto 20 Nacional 2023' },
        { imageUrl: 'assets/images/nacional2023/nacional2023n21.webp', caption: 'Foto 21 Nacional 2023' },
        { imageUrl: 'assets/images/nacional2023/nacional2023n22.webp', caption: 'Foto 22 Nacional 2023' },
        { imageUrl: 'assets/images/nacional2023/nacional2023n23.webp', caption: 'Foto 23 Nacional 2023' },
        { imageUrl: 'assets/images/nacional2023/nacional2023n24.webp', caption: 'Foto 24 Nacional 2023' },
        { imageUrl: 'assets/images/nacional2023/nacional2023n25.webp', caption: 'Foto 25 Nacional 2023' },
        { imageUrl: 'assets/images/nacional2023/nacional2023n26.webp', caption: 'Foto 26 Nacional 2023' },
        { imageUrl: 'assets/images/nacional2023/nacional2023n27.webp', caption: 'Foto 27 Nacional 2023' },
        { imageUrl: 'assets/images/nacional2023/nacional2023n28.webp', caption: 'Foto 28 Nacional 2023' },
        { imageUrl: 'assets/images/nacional2023/nacional2023n29.webp', caption: 'Foto 29 Nacional 2023' }
      ]
    },
    {
      title: 'Raid Latinoamericano',
      photos: [
        { imageUrl: 'assets/images/raidLatinoamericano/raidlatinoamericano1.webp', caption: 'Foto 1 Raid Latinoamericano' },
        { imageUrl: 'assets/images/raidLatinoamericano/raidlatinoamericano2.webp', caption: 'Foto 2 Raid Latinoamericano' },
        { imageUrl: 'assets/images/raidLatinoamericano/raidlatinoamericano3.webp', caption: 'Foto 3 Raid Latinoamericano' },
        { imageUrl: 'assets/images/raidLatinoamericano/raidlatinoamericano4.webp', caption: 'Foto 4 Raid Latinoamericano' },
        { imageUrl: 'assets/images/raidLatinoamericano/raidlatinoamericano5.webp', caption: 'Foto 5 Raid Latinoamericano' },
        { imageUrl: 'assets/images/raidLatinoamericano/raidlatinoamericano6.webp', caption: 'Foto 6 Raid Latinoamericano' },
        { imageUrl: 'assets/images/raidLatinoamericano/raidlatinoamericano7.webp', caption: 'Foto 7 Raid Latinoamericano' },
        { imageUrl: 'assets/images/raidLatinoamericano/raidlatinoamericano8.webp', caption: 'Foto 8 Raid Latinoamericano' },
        { imageUrl: 'assets/images/raidLatinoamericano/raidlatinoamericano9.webp', caption: 'Foto 9 Raid Latinoamericano' },
        { imageUrl: 'assets/images/raidLatinoamericano/raidlatinoamericano10.webp', caption: 'Foto 10 Raid Latinoamericano' },
        { imageUrl: 'assets/images/raidLatinoamericano/raidlatinoamericano11.webp', caption: 'Foto 11 Raid Latinoamericano' },
        { imageUrl: 'assets/images/raidLatinoamericano/raidlatinoamericano12.webp', caption: 'Foto 12 Raid Latinoamericano' },
        { imageUrl: 'assets/images/raidLatinoamericano/raidlatinoamericano13.webp', caption: 'Foto 13 Raid Latinoamericano' },
        { imageUrl: 'assets/images/raidLatinoamericano/raidlatinoamericano14.webp', caption: 'Foto 14 Raid Latinoamericano' },
        { imageUrl: 'assets/images/raidLatinoamericano/raidlatinoamericano15.webp', caption: 'Foto 15 Raid Latinoamericano' },
        { imageUrl: 'assets/images/raidLatinoamericano/raidlatinoamericano16.webp', caption: 'Foto 16 Raid Latinoamericano' },
        { imageUrl: 'assets/images/raidLatinoamericano/raidlatinoamericano17.webp', caption: 'Foto 17 Raid Latinoamericano' },
        { imageUrl: 'assets/images/raidLatinoamericano/raidlatinoamericano18.webp', caption: 'Foto 18 Raid Latinoamericano' },
        { imageUrl: 'assets/images/raidLatinoamericano/raidlatinoamericano19.webp', caption: 'Foto 19 Raid Latinoamericano' },
        { imageUrl: 'assets/images/raidLatinoamericano/raidlatinoamericano20.webp', caption: 'Foto 20 Raid Latinoamericano' },
        { imageUrl: 'assets/images/raidLatinoamericano/raidlatinoamericano21.webp', caption: 'Foto 21 Raid Latinoamericano' },
        { imageUrl: 'assets/images/raidLatinoamericano/raidlatinoamericano22.webp', caption: 'Foto 22 Raid Latinoamericano' },
        { imageUrl: 'assets/images/raidLatinoamericano/raidlatinoamericano23.webp', caption: 'Foto 23 Raid Latinoamericano' },
        { imageUrl: 'assets/images/raidLatinoamericano/raidlatinoamericano24.webp', caption: 'Foto 24 Raid Latinoamericano' },
        { imageUrl: 'assets/images/raidLatinoamericano/raidlatinoamericano25.webp', caption: 'Foto 25 Raid Latinoamericano' },
        { imageUrl: 'assets/images/raidLatinoamericano/raidlatinoamericano26.webp', caption: 'Foto 26 Raid Latinoamericano' },
        { imageUrl: 'assets/images/raidLatinoamericano/raidlatinoamericano27.webp', caption: 'Foto 27 Raid Latinoamericano' },
        { imageUrl: 'assets/images/raidLatinoamericano/raidlatinoamericano28.webp', caption: 'Foto 28 Raid Latinoamericano' },
        { imageUrl: 'assets/images/raidLatinoamericano/raidlatinoamericano29.webp', caption: 'Foto 29 Raid Latinoamericano' },
        { imageUrl: 'assets/images/raidLatinoamericano/raidlatinoamericano30.webp', caption: 'Foto 30 Raid Latinoamericano' },
        { imageUrl: 'assets/images/raidLatinoamericano/raidlatinoamericano31.webp', caption: 'Foto 31 Raid Latinoamericano' },
        { imageUrl: 'assets/images/raidLatinoamericano/raidlatinoamericano32.webp', caption: 'Foto 32 Raid Latinoamericano' },
        { imageUrl: 'assets/images/raidLatinoamericano/raidlatinoamericano33.webp', caption: 'Foto 33 Raid Latinoamericano' },
        { imageUrl: 'assets/images/raidLatinoamericano/raidlatinoamericano34.webp', caption: 'Foto 34 Raid Latinoamericano' },
        { imageUrl: 'assets/images/raidLatinoamericano/raidlatinoamericano35.webp', caption: 'Foto 35 Raid Latinoamericano' },
        { imageUrl: 'assets/images/raidLatinoamericano/raidlatinoamericano36.webp', caption: 'Foto 36 Raid Latinoamericano' },
        { imageUrl: 'assets/images/raidLatinoamericano/raidlatinoamericano37.webp', caption: 'Foto 37 Raid Latinoamericano' },
        { imageUrl: 'assets/images/raidLatinoamericano/raidlatinoamericano38.webp', caption: 'Foto 38 Raid Latinoamericano' },
        { imageUrl: 'assets/images/raidLatinoamericano/raidlatinoamericano39.webp', caption: 'Foto 39 Raid Latinoamericano' },
        { imageUrl: 'assets/images/raidLatinoamericano/raidlatinoamericano40.webp', caption: 'Foto 40 Raid Latinoamericano' },
        { imageUrl: 'assets/images/raidLatinoamericano/raidlatinoamericano41.webp', caption: 'Foto 41 Raid Latinoamericano' },
        { imageUrl: 'assets/images/raidLatinoamericano/raidlatinoamericano42.webp', caption: 'Foto 42 Raid Latinoamericano' },
        { imageUrl: 'assets/images/raidLatinoamericano/raidlatinoamericano43.webp', caption: 'Foto 43 Raid Latinoamericano' }
      ]
    },
    {
      title: 'Rally Raid',
      photos: [
        { imageUrl: 'assets/images/rallyRaid/rallyraid1.webp', caption: 'Foto 1 Rally Raid' },
        { imageUrl: 'assets/images/rallyRaid/rallyraid2.webp', caption: 'Foto 2 Rally Raid' },
        { imageUrl: 'assets/images/rallyRaid/rallyraid3.webp', caption: 'Foto 3 Rally Raid' },
        { imageUrl: 'assets/images/rallyRaid/rallyraid4.webp', caption: 'Foto 4 Rally Raid' },
        { imageUrl: 'assets/images/rallyRaid/rallyraid5.webp', caption: 'Foto 5 Rally Raid' },
        { imageUrl: 'assets/images/rallyRaid/rallyraid6.webp', caption: 'Foto 6 Rally Raid' },
        { imageUrl: 'assets/images/rallyRaid/rallyraid7.webp', caption: 'Foto 7 Rally Raid' },
        { imageUrl: 'assets/images/rallyRaid/rallyraid8.webp', caption: 'Foto 8 Rally Raid' },
        { imageUrl: 'assets/images/rallyRaid/rallyraid9.webp', caption: 'Foto 9 Rally Raid' },
        { imageUrl: 'assets/images/rallyRaid/rallyraid10.webp', caption: 'Foto 10 Rally Raid' },
        { imageUrl: 'assets/images/rallyRaid/rallyraid11.webp', caption: 'Foto 11 Rally Raid' }
      ]
    }
  ];

  showModal = false;
  selectedAlbumIndex = 0;
  photoIndex = 0;
  imageLoading = true;
  imageError = false;

  currentPage = 0;
  itemsPerPage = 6;

  get currentAlbum() {
    return this.albums[this.selectedAlbumIndex];
  }

  get totalPages(): number {
    return Math.ceil(this.albums.length / this.itemsPerPage);
  }

  get paginatedAlbums() {
    const startIndex = this.currentPage * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.albums.slice(startIndex, endIndex);
  }

  get pageNumbers(): number[] {
    const pages = [];
    const maxVisiblePages = 5;
    let startPage = Math.max(0, this.currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(this.totalPages - 1, startPage + maxVisiblePages - 1);

    if (endPage - startPage < maxVisiblePages - 1) {
      startPage = Math.max(0, endPage - maxVisiblePages + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }
    return pages;
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages - 1) {
      this.currentPage++;
    }
  }

  prevPage(): void {
    if (this.currentPage > 0) {
      this.currentPage--;
    }
  }

  goToPage(page: number): void {
    if (page >= 0 && page < this.totalPages) {
      this.currentPage = page;
    }
  }

  trackByPage(index: number, page: number): number {
    return page;
  }

  getAlbumIndex(paginatedIndex: number): number {
    return this.currentPage * this.itemsPerPage + paginatedIndex;
  }

  openAlbum(index: number) {
    this.selectedAlbumIndex = index;
    this.photoIndex = 0;
    this.showModal = true;
    this.imageLoading = true;
    this.imageError = false;
  }

  closeModal() {
    this.showModal = false;
  }

  nextPhoto() {
    const total = this.currentAlbum.photos.length;
    this.photoIndex = (this.photoIndex + 1) % total;
    this.imageLoading = true;
    this.imageError = false;
  }

  prevPhoto() {
    const total = this.currentAlbum.photos.length;
    this.photoIndex = (this.photoIndex - 1 + total) % total;
    this.imageLoading = true;
    this.imageError = false;
  }

  selectPhoto(index: number) {
    this.photoIndex = index;
    this.imageLoading = true;
    this.imageError = false;
  }

  onImageLoad() {
    this.imageLoading = false;
    this.imageError = false;
  }

  onImageError() {
    this.imageLoading = false;
    this.imageError = true;
    console.error('Error cargando imagen:', this.currentAlbum.photos[this.photoIndex].imageUrl);
  }
}
