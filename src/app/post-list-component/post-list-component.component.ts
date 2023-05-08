import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Data, Posts } from 'src/models/post.model';
import { faHeart, faSave } from '@fortawesome/free-regular-svg-icons';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-post-list-component',
  templateUrl: './post-list-component.component.html',
  styleUrls: ['./post-list-component.component.css']
})
export class PostListComponentComponent implements OnInit {


  @Input() posts?: Data[]=[]


  heartIcon = faHeart
  downloadIcon = faSave

  constructor(private router: Router, private apiServices: ApiService) { }

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

  onSaveClick(url: any, name: any) {
    //console.log("url:: ", url)
     window.open(url);
      // let a = document.createElement("a");
      // document.body.appendChild(a);
      // a.setAttribute("style", "display: none");
      // a.href = url;
      // a.download = "test.png";
      // a.click();
      // window.URL.revokeObjectURL(url);
      // a.remove();
  }



}
