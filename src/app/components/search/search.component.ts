import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {

  artistas: any[] = [];

  constructor( private spotifyService: SpotifyService) { }

  ngOnInit(): void {
  }

  buscarArtista(termino): any {
    console.log(termino);
    this.spotifyService.getArtist(termino).subscribe(data => {
      console.log(data);
      this.artistas = data;
    });
  }

}
