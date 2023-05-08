import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';
import { PostDetails } from 'src/models/postDetails.model';
import { take } from 'rxjs';
import { faHeart, faSave, faSquareCaretDown } from '@fortawesome/free-regular-svg-icons';
import { PostComment } from 'src/models/comment.model';

@Component({
  selector: 'app-postdetails',
  templateUrl: './postdetails.component.html',
  styleUrls: ['./postdetails.component.css']
})
export class PostdetailsComponent implements OnInit {

  heartIcon = faHeart
  downloadIcon = faSave
  arrowDownIcon = faSquareCaretDown
  constructor(private apiServices: ApiService, private router: Router) { }
  postID: any;

  postDetails?: PostDetails
  postComments?: PostComment

  ngOnInit(): void {
    this.postID = window.history.state.postID;
    this.getPostDetails()

    this.getPostComments()
  }

  getPostDetails() {
    this.apiServices.getPostDetails(this.postID).pipe(take(1)).subscribe({

      next: (respose) => {
        this.postDetails = respose;

      }
    });
  }

  getPostComments() {
    this.apiServices.getPostComments(this.postID).pipe(take(1)).subscribe({
      next: (response) => {
        this.postComments = response;

        //console.log("comments:: "+JSON.stringify(this.postComments))
      }
    });
  }

  openUserDetails(userID: any) {
    this.router.navigate(["/userdetails"], {
      state: {
        userID: userID
      }
    })
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

  onTagItemClick(tagItem: any){
   
    this.router.navigate(["/posts"], {
      state: {
        tagItem: tagItem
      }
    })
  }

}
