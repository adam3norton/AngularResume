import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, map } from "rxjs";
import { iDog } from "./dog.model";

@Injectable()
export class dogService {

  _url = 'https://personalwebsite-bc32c-default-rtdb.firebaseio.com/users.json';

  constructor(private http: HttpClient) {}

  getDogs(): Observable<Response> {
    return this.http.get<Response>(this._url)
  }
}
