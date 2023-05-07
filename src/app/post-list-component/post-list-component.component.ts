import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Posts } from 'src/models/post.model';
import { faHeart, faSave } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-post-list-component',
  templateUrl: './post-list-component.component.html',
  styleUrls: ['./post-list-component.component.css']
})
export class PostListComponentComponent implements OnInit {


  @Input() posts?: Posts


  heartIcon = faHeart
  downloadIcon = faSave

  constructor(private router: Router) { }

  ngOnInit(): void {
    //throw new Error('Method not implemented.');

    // console.log("data: " + this.posts)
  }


  openPostDetails(postID: any) {
    this.router.navigate(["/postdetails"], {
      state: {
        postID: postID
      }
    });

  }

}
