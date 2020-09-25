import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  albums: any[] = [];
  constructor( private spotifyService: SpotifyService) { }

  ngOnInit(): void {
    this.spotifyService.getNewReleases().subscribe(data => {
      // console.log(data.albums.items);
      this.albums = data;
      console.log(this.albums);

    });
  }



}
