import { Component, OnInit } from '@angular/core';

import { Album } from '../album';
import { ALBUMS } from '../mock-albums';
import {AlbumService} from "../album.service";


@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss']
})
export class AlbumsComponent implements OnInit {

  titlePage: string = "Albums Music Home Page";
  // albums: Album[] = ALBUMS;
  selectedAlbum: Album;
  playAlbum: Album;
  albumFind: Album;
  albums: Album[];
  title: string = "My App Music";

  constructor(private albumService: AlbumService) { }

  onSelect(album: Album): void {
    this.selectedAlbum = album;
    console.log(album);
  }

  playParent(album: Album){
    this.playAlbum = album;
    console.log(this.playAlbum);
  }

  ngOnInit() {
    this.albums = this.albumService.getAlbums();
  }

  search($event: Album []) {
    if ($event) this.albums = $event;
    console.log(`t'es sur la bonne voie ${this.albumFind}`);
  }
}
