import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScoreComponent } from './components/score/score.component';
import { UploadImageComponent } from './components/upload-image/upload-image.component';
import { HomeComponent } from './components/home/home.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import { NewUserComponent } from './components/new-user/new-user.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'users-list', component: UsersListComponent },
  { path: 'new-user', component: NewUserComponent },
  { path: 'upload-image', component: UploadImageComponent },
  { path: 'score', component: ScoreComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
