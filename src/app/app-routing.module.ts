import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { PostdetailsComponent } from './postdetails/postdetails.component';
import { TagWisePostComponent } from './tag-wise-post/tag-wise-post.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'users', component: UsersComponent },
  { path: 'userdetails', component: UserDetailsComponent },
  { path: 'postdetails', component: PostdetailsComponent },
  { path: 'posts', component: TagWisePostComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
