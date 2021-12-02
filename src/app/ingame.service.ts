import { Injectable } from '@angular/core';
import {catchError, Observable, of} from "rxjs";
import {Card} from "./Card";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class IngameService {

  private ingameURL = 'http://localhost:8080/Cards';  // URL to web api

  constructor(private http: HttpClient) { }

  /** GET heroes from the server */
  getCards(): Observable<Card[]> {
    return this.http.get<Card[]>(this.ingameURL)
      .pipe(
        catchError(this.handleError<Card[]>([]))
      );
  }

  private handleError<T>(result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
