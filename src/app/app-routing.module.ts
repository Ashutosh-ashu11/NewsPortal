import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuisnessNewsComponent } from './buisness-news/buisness-news.component';
import { GetEverythingComponent } from './get-everything/get-everything.component';
import { TechNewsComponent } from './tech-news/tech-news.component';
import { TopheadingComponent } from './topheading/topheading.component';

const routes: Routes = [{path:'',component:TopheadingComponent},
                        {path:'Tech',component:TechNewsComponent},
                        {path:'Business',component:BuisnessNewsComponent},
                        {path:'All',component:GetEverythingComponent}
                       ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
