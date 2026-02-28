import { Component, OnInit } from '@angular/core';
import { NgFor, NgIf, AsyncPipe } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { finalize, Observable } from 'rxjs';

import { Photo } from '../../models/photo.model';
import { AlbumService } from '../../services/album.service';

@Component({
  selector: 'app-album-photos',
  standalone: true,
  imports: [NgIf, NgFor, AsyncPipe],
  templateUrl: './album-photos.component.html',
  styleUrls: ['./album-photos.component.css']
})
export class AlbumPhotosComponent implements OnInit {
  albumId!: number;
  photos$!: Observable<Photo[]>;
  isLoading = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private albumService: AlbumService
  ) {}

  ngOnInit(): void {
    this.albumId = Number(this.route.snapshot.paramMap.get('id'));
    this.loadPhotos(this.albumId);
  }

  loadPhotos(id: number): void {
    this.isLoading = true;
    this.photos$ = this.albumService.getAlbumPhotos(id).pipe(
      finalize(() => (this.isLoading = false))
    );
  }

  back(): void {
    this.router.navigate(['/albums', this.albumId]);
  }
}