import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { take } from 'rxjs';
import { Posts } from 'src/models/post.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  

  constructor(private apiServices: ApiService) {

  }

  ngOnInit(): void {
    this.getPosts()
  }

  posts?: Posts;

  getPosts() {
    this.apiServices.getPosts().pipe(take(1)).subscribe({
      next: (response) => {

        this.posts = response;
      },
      error: err => {
        console.error("ERROR:: ", err);
      }
    });
  }

  onSaveClick(url: any, name: any) {
    //saveAs(url, name+'.png');
  }

}
