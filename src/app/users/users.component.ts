import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { take } from 'rxjs';
import { Daum, Users } from 'src/models/userList.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private apiServices: ApiService, private router: Router) {

  }

  ngOnInit(): void {
    this.getUsers()
  }

  userList?: Daum[]= []

  getUsers() {
    this.apiServices.getUserList().pipe(take(1)).subscribe({
      next: (response) => {

        this.userList = response.data
        console.log(this.userList)
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
}
