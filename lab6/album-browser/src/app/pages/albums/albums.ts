import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { finalize } from 'rxjs';

import { AlbumService } from '../../services/album.service';
import { Album } from '../../models/album.model';

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './albums.html',
  styleUrl: './albums.css',
})
export class AlbumsComponent implements OnInit {
  isLoading = false;
  error: string | null = null;
  albums: Album[] = [];

  deletingIds = new Set<number>();

  constructor(private readonly albumService: AlbumService) {}

  ngOnInit(): void {
    this.loadAlbums();
  }

  loadAlbums(): void {
    this.isLoading = true;
    this.error = null;

    this.albumService.getAlbums()
      .pipe(finalize(() => (this.isLoading = false)))
      .subscribe({
        next: (albums) => (this.albums = albums),
        error: () => (this.error = 'Failed to load albums. Try again later.'),
      });
  }

  deleteAlbum(id: number, event: MouseEvent): void {
    event.stopPropagation(); // чтобы клик по кнопке не открыл detail
    if (this.deletingIds.has(id)) return;

    this.deletingIds.add(id);

    this.albumService.deleteAlbum(id)
      .pipe(finalize(() => this.deletingIds.delete(id)))
      .subscribe({
        next: () => {
          this.albums = this.albums.filter(a => a.id !== id);
        },
        error: () => {
          this.error = 'Failed to delete album.';
        },
      });
  }
}