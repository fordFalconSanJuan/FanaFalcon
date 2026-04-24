import { NgClass, NgOptimizedImage, isPlatformBrowser } from '@angular/common';
import { Component, HostListener, OnInit, PLATFORM_ID, inject } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import {Carousel} from '../carousel/carousel';

interface CommissionRole {
  id: string;
  title: string;
  subtitle: string;
}

interface UpcomingEvent {
  id: string;
  title: string;
  dateLabel: string;
  location: string;
  summary: string;
  imageUrl: string;
  status: string;
  isFlyer?: boolean;
  details?: string[];
  mapEmbedUrl?: string;
}


@Component({
  selector: 'app-main-page',
  imports: [
    Carousel,
    NgClass,
    NgOptimizedImage
  ],
  templateUrl: './main-page.html',
  styleUrl: './main-page.css'
})
export class MainPage implements OnInit {
  private readonly platformId = inject(PLATFORM_ID);
  private readonly sanitizer = inject(DomSanitizer);
  private readonly flyerSessionKey = 'homeFlyerSeen';

  showFlyerModal = false;
  selectedEvent: UpcomingEvent | null = null;
  selectedEventMapUrl: SafeResourceUrl | null = null;
  activeEventIndex = 0;

  readonly commissionHead: CommissionRole = {
    id: 'comision',
    title: 'Comisión',
    subtitle: 'Estructura organizativa'
  };

  readonly commissionRoles: CommissionRole[] = [
    { id: 'presidencia', title: 'Presidente', subtitle: 'Coordinacion general' },
    { id: 'secretaria', title: 'Secretario', subtitle: 'Actas y comunicacion' },
    { id: 'tesoreria', title: 'Tesorero', subtitle: 'Gestion administrativa' },
    { id: 'vocales', title: 'Vocales', subtitle: 'Apoyo institucional' }
  ];

  readonly accountReviewerRole: CommissionRole = {
    id: 'revisor-cuentas',
    title: 'Revisor de cuentas',
    subtitle: 'Control interno'
  };

  readonly upcomingEvents: UpcomingEvent[] = [
    {
      id: 'mtm-audio',
      title: 'MTM Audio San Juan',
      dateLabel: 'Sábado 23 de mayo 2026',
      location: 'Parque de Chimbas',
      summary: 'Competencias y promociones del MTM Audio: presentá tu máquina en las distintas categorías y disputá cada premiación.',
      details: [
        'Limbo: General, Neumática y Vale todo',
        'Club con más Autos',
        'Original Destacado',
        'Tuning Destacado',
        'Restaurado Destacado',
        'Motor Destacado',
        'Audio Destacado',
        'Auto más Raro'
      ],
      imageUrl: 'assets/images/expoFanaFestFlyer.jpeg',
      isFlyer: true,
      status: 'Evento destacado',
      mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3401.5563275541017!2d-68.5291194243889!3d-31.50887687421922!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x968141df658938db%3A0xd8b42959a06d6bf!2sParque%20De%20Chimbas!5e0!3m2!1ses-419!2sar!4v1777010386655!5m2!1ses-419!2sar'
    },
    {
      id: 'expo-fana-fest-2',
      title: 'Expo Fana Fest 2026',
      dateLabel: 'Domingo 24 de mayo 2026',
      location: 'Parque de Chimbas',
      summary: 'No te podés perder esta convocatoria: más de 40 clubes de distintas marcas y provincias, autos internacionales, camiones, la gran final del MTM y la coronación de cada premiación.',
      imageUrl: 'assets/images/expoFanaFestFlyer2.jpeg',
      isFlyer: true,
      status: 'Evento destacado',
      mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3401.5563275541017!2d-68.5291194243889!3d-31.50887687421922!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x968141df658938db%3A0xd8b42959a06d6bf!2sParque%20De%20Chimbas!5e0!3m2!1ses-419!2sar!4v1777010386655!5m2!1ses-419!2sar'
    },
    {
      id: 'juntada-mensual',
      title: 'Juntada Mensual',
      dateLabel: 'Fecha a confirmar',
      location: 'A determinar',
      summary: 'Una juntada en familia con el Club, en algún departamento de la provincia de San Juan, con el propósito de juntarnos a compartir el amor por el Ford Falcon.',
      imageUrl: 'assets/images/juntadaMensualParqueChimbas/juntadamensualparquechimbas4.webp',
      status: 'Próximamente'
    }
  ];

  get activeEvent(): UpcomingEvent | null {
    return this.upcomingEvents[this.activeEventIndex] ?? null;
  }

  ngOnInit(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    const flyerWasSeen = sessionStorage.getItem(this.flyerSessionKey) === 'true';
    if (!flyerWasSeen) {
      this.showFlyerModal = true;
      sessionStorage.setItem(this.flyerSessionKey, 'true');
    }
  }

  closeFlyerModal(): void {
    this.showFlyerModal = false;
  }

  openEventModal(event: UpcomingEvent): void {
    this.selectedEvent = event;
    this.selectedEventMapUrl = event.mapEmbedUrl
      ? this.sanitizer.bypassSecurityTrustResourceUrl(event.mapEmbedUrl)
      : null;
  }

  closeEventModal(): void {
    this.selectedEvent = null;
    this.selectedEventMapUrl = null;
  }

  showPreviousEvent(): void {
    if (this.upcomingEvents.length === 0) {
      return;
    }

    this.activeEventIndex = (this.activeEventIndex - 1 + this.upcomingEvents.length) % this.upcomingEvents.length;
  }

  showNextEvent(): void {
    if (this.upcomingEvents.length === 0) {
      return;
    }

    this.activeEventIndex = (this.activeEventIndex + 1) % this.upcomingEvents.length;
  }

  goToEvent(index: number): void {
    if (index < 0 || index >= this.upcomingEvents.length) {
      return;
    }

    this.activeEventIndex = index;
  }

  @HostListener('document:keydown.escape')
  onEscapeKeydown(): void {
    if (this.showFlyerModal) {
      this.closeFlyerModal();
      return;
    }

    if (!this.selectedEvent) {
      return;
    }

    this.closeEventModal();
  }

}
