import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScoreComponent } from './components/score/score.component';
import { UploadImageComponent } from './components/upload-image/upload-image.component';

const routes: Routes = [
  { path: '', component: UploadImageComponent, pathMatch: 'full' },
  { path: 'score', component: ScoreComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
