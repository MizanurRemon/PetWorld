import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-owner-profile-component',
  templateUrl: './owner-profile-component.component.html',
  styleUrls: ['./owner-profile-component.component.css']
})
export class OwnerProfileComponentComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {

  }

  @Input() firstName?: any;
  @Input() lastName?: any;
  @Input() userID?: any;
  @Input() picture?: any;
  @Input() date?: any

  openUserDetails(userID: any) {
    this.router.navigate(["/userdetails"], {
      state: {
        userID: userID
      }
    })
  }
}
