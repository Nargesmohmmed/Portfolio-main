import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ProjectComponent } from './project/project.component';

const routes: Routes = [

  {path: '' , redirectTo:'about' , pathMatch:'full' ,title: 'About'},
  {path: 'about' , component:AboutComponent , title: 'About'},
  {path: 'project', component:ProjectComponent , title: 'Project'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
