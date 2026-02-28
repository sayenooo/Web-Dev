import { Component, OnInit } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { Router } from '@angular/router';

import { Album } from '../../models/album.model';
import { AlbumService } from '../../services/album.service';

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [NgIf, NgFor],
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
  albums: Album[] = [];
  isLoading = true;
  errorMsg = '';

  constructor(private albumService: AlbumService, private router: Router) {
    console.log('AlbumsComponent CONSTRUCTOR');
  }

  ngOnInit(): void {
    console.log('AlbumsComponent INIT');

    this.albumService.getAlbums().subscribe({
      next: (data: Album[]) => {
        console.log('albums next', data.length);
        this.albums = data;
        this.isLoading = false;
      },
      error: (err: unknown) => {
        console.log('albums error');
        console.error(err);
        this.errorMsg = 'Failed to load albums';
        this.isLoading = false;
      }
    });
  }

  openAlbum(id: number): void {
    this.router.navigate(['/albums', id]);
  }

  deleteAlbum(id: number, event: MouseEvent): void {
    event.stopPropagation();
    this.albumService.deleteAlbum(id).subscribe({
      next: () => {
        this.albums = this.albums.filter(a => a.id !== id);
      },
      error: (err: unknown) => console.error(err)
    });
  }
}