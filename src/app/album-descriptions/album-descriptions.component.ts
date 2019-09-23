import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Album } from '../album';
import {AlbumService} from "../album.service";

@Component({
  selector: 'app-album-descriptions',
  templateUrl: './album-descriptions.component.html',
  styleUrls: ['./album-descriptions.component.scss']
})
export class AlbumDescriptionsComponent implements OnInit {

  album : Album ;

  constructor(
      private route: ActivatedRoute, // récupérez le service route
      private aS: AlbumService // récupérez le service
  ) { }

  ngOnInit() {

    const id = this.route.snapshot.paramMap.get('id');
    this.album = this.aS.getAlbum(id);
  }

}
