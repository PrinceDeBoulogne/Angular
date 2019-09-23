import { Injectable } from '@angular/core';
import { ALBUMS } from './mock-albums';
import { Album } from './album';
import { ALBUM_LISTS } from './mock-albums';
import {List} from "../../../../Ex8_9_Correction/album";



@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  private _albums: Album[] = ALBUMS; // _ convention private et protected
  private _albumList: List[] = ALBUM_LISTS;

  constructor() { }

  getAlbums(): Album[] {

    return ALBUMS;
  }

  getAlbumList(id): List{
    return this._albumList.find(list => list.id === id);
  }
  getAlbum(id): Album {
    return ALBUMS.find(elem => elem.id === id)
  }

  search(word: string): Album[] {
    if (word.length > 2) {
      let response = [];
      this._albums.forEach(album => {
        if (album.title.includes(word)) response.push(album);
      });

      return response;
    }
  }
}

