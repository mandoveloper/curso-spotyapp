import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient) {
    console.log('Servicio Spotify Listo');

  }

  getNewReleases(): Observable<any> {

    const headers = new HttpHeaders({
      Authorization: environment._TOKEN_SPOTI_APP
    });

    return this.http.get('https://api.spotify.com/v1/browse/new-releases', {headers});
  }
}
