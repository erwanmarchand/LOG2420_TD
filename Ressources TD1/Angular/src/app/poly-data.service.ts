/**
 * poly-data.service.ts - Service pour lire et fournir les données aux composants
 * 
 * @authors Mathieu KABORÉ
 * @date 2017/01/16
 */
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class PolyDataService {

  // À compléter
  // ...

  constructor(private http: Http) { }

  getListeNouvelles(): Promise<Object> {
    return this.http.get('app/nouvelles.json')
      .toPromise()
      .then(response => response.json())
      .catch(this.handleError);
  }

  getListeMenu(): Promise<Object> {
    return this.http.get('app/menu.json')
      .toPromise()
      .then(response => response.json())
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
