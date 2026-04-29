import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface AlbumPhoto {
  imageUrl: string;
  caption: string;
}

export interface AlbumItem {
  title: string;
  photos: AlbumPhoto[];
}

@Injectable({ providedIn: 'root' })
export class AlbumsService {
  private readonly http = inject(HttpClient);

  getAlbums(): Observable<AlbumItem[]> {
    return this.http.get<AlbumItem[]>('assets/data/albums.json');
  }
}
