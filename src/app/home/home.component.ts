import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { take } from 'rxjs';
import { Data, Posts } from 'src/models/post.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  page = 0
  limit = 10

  constructor(private apiServices: ApiService) {

  }

  ngOnInit(): void {
    this.getPosts(this.page)
  }

  posts?: Posts;
  postList? :Data[]=[]

  getPosts(page: any) {
    this.apiServices.getPosts(page).pipe(take(1)).subscribe({
      next: (response) => {

        //this.posts = response;
        this.postList?.push(...response.data)
        console.log(this.postList?.length)
      },
      error: err => {
        console.error("ERROR:: ", err);
      }
    });
  }

  

  onScrollFunction() {
    console.log("scroll")
    this.page++;
    this.getPosts(this.page);
  }

}
