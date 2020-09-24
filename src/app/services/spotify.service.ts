import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient) {
    console.log('Servicio Spotify Listo');

  }

  getNewReleases(): Observable<any> {

    const headers = new HttpHeaders({
      Authorization: 'Bearer BQAu7XHebG57HyPrdJ410RH9sSTd0U7WBAbKj_jkBX1ZTECfgC6oArcRfhhTKI2DTjoXuPAGFYt1bcxjf_U'
    });

    return this.http.get('https://api.spotify.com/v1/browse/new-releases', {headers});
  }
}
