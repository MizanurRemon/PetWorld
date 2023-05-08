import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, take } from 'rxjs';
import { ApiService } from '../services/api.service';
import { User } from 'src/models/user.model';
import { Data, Posts } from 'src/models/post.model';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  cover: any = 'https://img.dummyapi.io/photo-1568572933382-74d440642117.jpg';
  userId: any;
  constructor(private apiServices: ApiService, private router: Router, public activatedRoute: ActivatedRoute) { }

  tabItems = ['Posts', 'About']
  selectedTabItem: any = "Posts";

  page = 1
  postList?: Data[]=[]


  ngOnInit(): void {

    this.userId = window.history.state.userID
    // this.userId = this.activatedRoute.paramMap.pipe(map(() => window.history.state))
    // console.log("data: "+JSON.stringify(window.history.state));
    // console.log("UserID: " + JSON.stringify(this.userId));

    this.getUserDetails()

    this.getUserPosts(this.page)
  }

  userDetails?: User;

  posts?: Posts

  getUserDetails() {

    this.apiServices.getUserDetails(this.userId).pipe(take(1)).subscribe({
      next: (response) => {
        this.userDetails = response;
        //console.log("details: " + JSON.stringify(this.userDetails));
      }
    });
  }

  getUserPosts(page:any) {
    this.apiServices.getUserPost(this.userId, page).pipe(take(1)).subscribe({
      next: (response) => {
        //this.posts = response
        //console.log(this.getPosts)
        this.postList?.push(...response.data)
      }
    });
  }

  changeTabItemOnClick(value: any) {
    this.selectedTabItem = value;
  }

  onScrollFunction() {
    this.page++;
    this.getUserPosts(this.page);
  }

}
