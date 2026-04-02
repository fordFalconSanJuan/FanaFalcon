import {HttpClient} from '@angular/common/http';
import {Component, OnInit, inject} from '@angular/core';
import {Carousel} from '../carousel/carousel';
import {NgForOf, NgIf, NgOptimizedImage} from '@angular/common';

interface AlbumPhoto {
  imageUrl: string;
  caption: string;
}

interface AlbumItem {
  title: string;
  photos: AlbumPhoto[];
}

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
export class Albums implements OnInit {
  private readonly http = inject(HttpClient);

  albums: AlbumItem[] = [];
  showModal = false;
  selectedAlbumIndex = 0;
  photoIndex = 0;
  imageLoading = true;
  imageError = false;
  isLoadingAlbums = true;
  albumsError = false;

  currentPage = 0;
  itemsPerPage = 6;

  ngOnInit(): void {
    this.loadAlbums();
  }

  get currentAlbum(): AlbumItem {
    return this.albums[this.selectedAlbumIndex];
  }

  get totalPages(): number {
    return Math.ceil(this.albums.length / this.itemsPerPage);
  }

  get paginatedAlbums(): AlbumItem[] {
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

  trackByAlbum(index: number, album: AlbumItem): string {
    return album.title;
  }

  trackByPhoto(index: number, photo: AlbumPhoto): string {
    return photo.imageUrl;
  }

  getAlbumIndex(paginatedIndex: number): number {
    return this.currentPage * this.itemsPerPage + paginatedIndex;
  }

  openAlbum(index: number): void {
    if (!this.albums.length) {
      return;
    }

    this.selectedAlbumIndex = index;
    this.photoIndex = 0;
    this.showModal = true;
    this.imageLoading = true;
    this.imageError = false;
  }

  closeModal(): void {
    this.showModal = false;
  }

  nextPhoto(): void {
    const total = this.currentAlbum.photos.length;
    this.photoIndex = (this.photoIndex + 1) % total;
    this.imageLoading = true;
    this.imageError = false;
  }

  prevPhoto(): void {
    const total = this.currentAlbum.photos.length;
    this.photoIndex = (this.photoIndex - 1 + total) % total;
    this.imageLoading = true;
    this.imageError = false;
  }

  selectPhoto(index: number): void {
    this.photoIndex = index;
    this.imageLoading = true;
    this.imageError = false;
  }

  onImageLoad(): void {
    this.imageLoading = false;
    this.imageError = false;
  }

  onImageError(): void {
    this.imageLoading = false;
    this.imageError = true;
    const failedImage = this.currentAlbum?.photos[this.photoIndex]?.imageUrl;
    if (failedImage) {
      console.error('Error cargando imagen:', failedImage);
    }
  }

  private loadAlbums(): void {
    this.http.get<AlbumItem[]>('assets/data/albums.json').subscribe({
      next: (albums) => {
        this.albums = albums;
        this.currentPage = 0;
        this.isLoadingAlbums = false;
        this.albumsError = false;
      },
      error: () => {
        this.albums = [];
        this.isLoadingAlbums = false;
        this.albumsError = true;
      }
    });
  }
}
