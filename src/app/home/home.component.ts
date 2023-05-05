import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { take } from 'rxjs';
import { Posts } from 'src/models/post.model';
import { faHeart, faSave } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

   heartIcon = faHeart
   downloadIcon = faSave

  constructor(private apiServices: ApiService){

  }

  ngOnInit(): void {
    this.getPosts()
  }

  postList?: any;

  getPosts(){
    this.apiServices.getPosts().pipe(take(1)).subscribe({
      next: (response)=>{

        this.postList = response;
      },
      error: err=>{
        console.error("ERROR:: ",err);
      }
    });
  }

  onSaveClick(url: any, name: any){
    //saveAs(url, name+'.png');
  }

}
