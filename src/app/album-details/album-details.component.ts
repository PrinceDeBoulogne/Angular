import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Album } from '../album';


@Component({
  selector: 'app-album-details',
  templateUrl: './album-details.component.html',
  styleUrls: ['./album-details.component.scss']
})
export class AlbumDetailsComponent implements OnInit {

  @Output() onPlay: EventEmitter<Album> = new EventEmitter();
  @Input() album: Album;

  constructor() { }

  ngOnInit() {
    console.log(this.album);
  }

    // ngOnChanges() {
    //     // on vérifie que l'on a bien cliqué sur un album avant de rechercher dans la liste
    //     // des chansons.
    //     if(this.albums){
    //         // récupération de la liste des chansons
    //         this.se = this.albumLists.find(elem => elem.id === this.album.id).list;
    //     }


  play(album: Album) {
    this.onPlay.emit(album); // émettre un album vers le parent
  }

}
