import { Injectable } from '@angular/core';
import {catchError, Observable, of} from "rxjs";
import {Card} from "./Card";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class IngameService {

  private ingameURL = 'http://192.168.2.41:8080/Cards';  // URL to web api

  constructor(private http: HttpClient) { }

  private handleError<T>(result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
