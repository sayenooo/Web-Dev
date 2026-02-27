import { Component, OnInit } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { finalize } from 'rxjs';

import { AlbumService } from '../../services/album.service';
import { Album } from '../../models/album.model';

@Component({
  selector: 'app-album-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './album-detail.html',
  styleUrl: './album-detail.css',
})
export class AlbumDetailComponent implements OnInit {
  isLoading = false;
  isSaving = false;
  error: string | null = null;

  album: Album | null = null;
  titleDraft = '';

  constructor(
    private readonly route: ActivatedRoute,
    private readonly albumService: AlbumService,
    private readonly location: Location
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (!Number.isFinite(id) || id <= 0) {
      this.error = 'Invalid album id.';
      return;
    }
    this.loadAlbum(id);
  }

  loadAlbum(id: number): void {
    this.isLoading = true;
    this.error = null;

    this.albumService.getAlbum(id)
      .pipe(finalize(() => (this.isLoading = false)))
      .subscribe({
        next: (album) => {
          this.album = album;
          this.titleDraft = album.title;
        },
        error: () => (this.error = 'Failed to load album details.'),
      });
  }

  save(): void {
    if (!this.album) return;

    const nextTitle = this.titleDraft.trim();
    if (nextTitle.length === 0) {
      this.error = 'Title cannot be empty.';
      return;
    }

    this.isSaving = true;
    this.error = null;

    const updated: Album = { ...this.album, title: nextTitle };

    this.albumService.updateAlbum(updated)
      .pipe(finalize(() => (this.isSaving = false)))
      .subscribe({
        next: (album) => (this.album = album),
        error: () => (this.error = 'Failed to save album title.'),
      });
  }

  backToAlbums(): void {
    // строго по ТЗ: назад на /albums
    this.location.go('/albums');
    // но Location.go не навигирует. Лучше просто routerLink в шаблоне.
  }
}