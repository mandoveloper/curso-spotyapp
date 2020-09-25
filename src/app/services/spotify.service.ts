import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SpotifyService {
  constructor(private http: HttpClient) {
    console.log('Servicio Spotify Listo');
  }

  getQuery(query: string): any {
    const url = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      Authorization: environment._TOKEN_SPOTI_APP,
    });

    return this.http.get(url, {headers});
  }

  getNewReleases(): Observable<any> {
    return this.getQuery('browse/new-releases')
        .pipe(map((data) => data[`albums`].items));
  }

  getArtist(termino: string): Observable<any> {

    return this.getQuery(`search?q=${termino}&type=artist`)
        .pipe(map((data) => data[`artists`].items));
  }
}
