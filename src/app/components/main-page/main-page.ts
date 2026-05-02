import { NgClass, NgOptimizedImage, isPlatformBrowser } from '@angular/common';
import { Component, HostListener, OnInit, PLATFORM_ID, inject } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';
import { Carousel } from '../carousel/carousel';
import { AlbumsService, AlbumItem } from '../../services/albums.service';
import { EventsService, UpcomingEvent } from '../../services/events.service';

interface CommissionRole {
  id: string;
  title: string;
  subtitle: string;
}

@Component({
  selector: 'app-main-page',
  imports: [
    Carousel,
    NgClass,
    NgOptimizedImage,
    RouterLink,
  ],
  templateUrl: './main-page.html',
  styleUrl: './main-page.css'
})
export class MainPage implements OnInit {
  private readonly platformId = inject(PLATFORM_ID);
  private readonly sanitizer = inject(DomSanitizer);
  private readonly albumsService = inject(AlbumsService);
  private readonly eventsService = inject(EventsService);
  private readonly flyerSessionKey = 'homeFlyerSeen';

  showFlyerModal = false;
  selectedEvent: UpcomingEvent | null = null;
  selectedEventMapUrl: SafeResourceUrl | null = null;
  activeEventIndex = 0;
  featuredAlbums: AlbumItem[] = [];

  readonly galleryHighlights = [
    { imageUrl: 'assets/images/aerea.jpg', caption: 'Vista aérea del encuentro' },
    { imageUrl: 'assets/images/caravana.jpg', caption: 'Caravana de Falcons' },
    { imageUrl: 'assets/images/autos.jpg', caption: 'Autos del club' },
    { imageUrl: 'assets/images/fanaFalcon.jpg', caption: 'Fana Falcon' },
    { imageUrl: 'assets/images/estacionados.jpg', caption: 'Encuentro en San Juan' },
    { imageUrl: 'assets/images/aireLibre.jpg', caption: 'Al aire libre' },
  ];

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

  upcomingEvents: UpcomingEvent[] = [];

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

    this.albumsService.getAlbums().subscribe({
      next: (albums) => {
        this.featuredAlbums = albums.slice(0, 3);
      },
      error: () => {
        this.featuredAlbums = [];
      }
    });

    this.eventsService.getEvents().subscribe({
      next: (events) => {
        this.upcomingEvents = events;
      },
      error: () => {
        this.upcomingEvents = [];
      }
    });
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
    if (this.upcomingEvents.length === 0) return;
    this.activeEventIndex = (this.activeEventIndex - 1 + this.upcomingEvents.length) % this.upcomingEvents.length;
  }

  showNextEvent(): void {
    if (this.upcomingEvents.length === 0) return;
    this.activeEventIndex = (this.activeEventIndex + 1) % this.upcomingEvents.length;
  }

  goToEvent(index: number): void {
    if (index >= 0 && index < this.upcomingEvents.length) {
      this.activeEventIndex = index;
    }
  }

  @HostListener('document:keydown.escape')
  onEscapeKeydown(): void {
    if (this.showFlyerModal) {
      this.closeFlyerModal();
      return;
    }
    if (this.selectedEvent) {
      this.closeEventModal();
    }
  }
}
