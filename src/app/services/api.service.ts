import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Posts } from 'src/models/post.model';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private BASE_URL = "https://dummyapi.io/data/v1/";

  private POSTS = "post";

  private APPID = "63cd111ff805cea1c4e8e6a3";

  constructor(private http: HttpClient) { }

  getPosts(): Observable<Posts> {
    let headers = new HttpHeaders({
      'app-id': this.APPID
    });

    return this.http.get<Posts>(this.BASE_URL + this.POSTS, { headers });
  }
}
