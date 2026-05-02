import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface UpcomingEvent {
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

@Injectable({ providedIn: 'root' })
export class EventsService {
  private readonly http = inject(HttpClient);

  getEvents(): Observable<UpcomingEvent[]> {
    return this.http.get<UpcomingEvent[]>('assets/data/events.json');
  }
}
