import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Posts } from 'src/models/post.model';
import { User } from 'src/models/user.model';
import { PostDetails } from 'src/models/postDetails.model';
import { PostComment } from 'src/models/comment.model';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private BASE_URL = "https://dummyapi.io/data/v1/";

  private POSTS = "post";

  private APPID = "63cd111ff805cea1c4e8e6a3";

  private USER = "user";

  private COMMENT = "comment";

  private TAG = "tag";

  constructor(private http: HttpClient) { }

  getPosts(page: any): Observable<Posts> {
    let headers = new HttpHeaders({
      'app-id': this.APPID
    });

    let queryParams = new HttpParams();
    queryParams = queryParams.append("page", page);

    const options = { params: queryParams, headers: headers };

    return this.http.get<Posts>(this.BASE_URL + this.POSTS, options);
  }

  getUserDetails(userID: any): Observable<User> {
    let headers = new HttpHeaders({
      'app-id': this.APPID
    });

    return this.http.get<User>(this.BASE_URL + this.USER + "/" + userID, {
      headers
    })
  }


  getUserPost(userID: any, page: any): Observable<Posts> {
    let headers = new HttpHeaders({
      'app-id': this.APPID
    });

    let queryParams = new HttpParams();
    queryParams = queryParams.append("page", page);

    const options = { params: queryParams, headers: headers };

    return this.http.get<Posts>(this.BASE_URL + this.USER + "/" + userID + "/" + this.POSTS, { headers }
    );
  }

  getPostDetails(postID: any): Observable<PostDetails> {
    let headers = new HttpHeaders({
      'app-id': this.APPID
    });

    return this.http.get<PostDetails>(this.BASE_URL + this.POSTS + "/" + postID, { headers });
  }

  getPostComments(postID: any): Observable<PostComment> {
    let headers = new HttpHeaders({
      'app-id': this.APPID
    });

    return this.http.get<PostComment>(this.BASE_URL + this.POSTS + "/" + postID + "/" + this.COMMENT, { headers });
  }

  getTagWisePost(tagItem: any, page: any): Observable<Posts> {
    let headers = new HttpHeaders({
      'app-id': this.APPID
    });

    let queryParams = new HttpParams();
    queryParams = queryParams.append("page", page);

    const options = { params: queryParams, headers: headers };

    return this.http.get<Posts>(this.BASE_URL + this.TAG + "/" + tagItem+"/"+this.POSTS, options);
  }

  imageDownLoad(imagePath: any, fileName: any) {
    return this.http
      .get(
        imagePath,
        {
          responseType: "blob"
        }
      )
      .pipe(
        map(res => {
          return {
            filename: fileName,
            data: res
          };
        })
      );
  }
}
