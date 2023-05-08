import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faHome, faUser, faTag } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  title = 'PetWorld';

  homeIcon = faHome
  userIcon = faUser
  tagIcon = faTag

  navItems: any = ["Home", "Users"]

  clickedItem : any = "home"

  constructor(private router: Router){}

  ngOnInit(): void {

   // this.rou
    
  }

  onNavClick(item: any){
    //console.log(item)
    this.clickedItem = item

  
  }
}


//	[ngStyle]="{'color':clickedItem ==='users'? 'white':'gray'}"
				