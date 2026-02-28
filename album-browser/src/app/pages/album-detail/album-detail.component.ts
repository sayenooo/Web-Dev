import { Component, OnInit } from '@angular/core';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { finalize } from 'rxjs';

import { Album } from '../../models/album.model';
import { AlbumService } from '../../services/album.service';

@Component({
  selector: 'app-album-detail',
  standalone: true,
  imports: [NgIf, FormsModule],
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css']
})
export class AlbumDetailComponent implements OnInit {
  album?: Album;
  editTitle = '';
  isLoading = false;
  isSaving = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private albumService: AlbumService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.fetchAlbum(id);
  }

  fetchAlbum(id: number): void {
    this.isLoading = true;
    this.albumService.getAlbum(id).pipe(
      finalize(() => (this.isLoading = false))
    ).subscribe({
      next: (album) => {
        this.album = album;
        this.editTitle = album.title;
      }
    });
  }

  save(): void {
    if (!this.album) return;

    const updated: Album = {
      ...this.album,
      title: this.editTitle.trim() || this.album.title
    };

    this.isSaving = true;
    this.albumService.updateAlbum(updated).pipe(
      finalize(() => (this.isSaving = false))
    ).subscribe({
      next: (res) => {
        this.album = res;
        this.editTitle = res.title;
      }
    });
  }

  goToPhotos(): void {
    if (!this.album) return;
    this.router.navigate(['/albums', this.album.id, 'photos']);
  }

  backToList(): void {
    this.router.navigate(['/albums']);
  }
}