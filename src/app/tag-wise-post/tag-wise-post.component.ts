import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { take } from 'rxjs';
import { Data } from 'src/models/post.model';

@Component({
  selector: 'app-tag-wise-post',
  templateUrl: './tag-wise-post.component.html',
  styleUrls: ['./tag-wise-post.component.css']
})
export class TagWisePostComponent implements OnInit {

  tagItem: any
  constructor(private apiServices: ApiService) { }

  postList?: Data[] = []
  page: any = 1

  ngOnInit(): void {
    

    this.tagItem = window.history.state.tagItem ?? "dog";

    this.getTagWisePosts()
  }


  getTagWisePosts() {
    console.log(this.tagItem)
    this.apiServices.getTagWisePost(this.tagItem, this.page).pipe(take(1)).subscribe({
      next: (response) => {
        this.postList?.push(...response.data);
      }
    });
  }

  onScrollFunction() {
    this.page++;
    this.getTagWisePosts()
  }

  onSearch() {
    this.page = 1
    //this.tagItem = "human"
    this.clearPostList()
    this.getTagWisePosts()
  }

  clearPostList() {
    this.postList = []
  }

}
