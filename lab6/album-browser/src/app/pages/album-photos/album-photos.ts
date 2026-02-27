import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { finalize } from 'rxjs';

import { AlbumService } from '../../services/album.service';
import { Photo } from '../../models/photo.model';

@Component({
  selector: 'app-album-photos',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './album-photos.html',
  styleUrl: './album-photos.css',
})
export class AlbumPhotosComponent implements OnInit {
  albumId: number | null = null;

  isLoading = false;
  error: string | null = null;
  photos: Photo[] = [];

  constructor(
    private readonly route: ActivatedRoute,
    private readonly albumService: AlbumService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (!Number.isFinite(id) || id <= 0) {
      this.error = 'Invalid album id.';
      return;
    }

    this.albumId = id;
    this.loadPhotos(id);
  }

  loadPhotos(id: number): void {
    this.isLoading = true;
    this.error = null;

    this.albumService.getAlbumPhotos(id)
      .pipe(finalize(() => (this.isLoading = false)))
      .subscribe({
        next: (photos) => (this.photos = photos),
        error: () => (this.error = 'Failed to load photos.'),
      });
  }
}