import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { OverviewComponent } from './overview/overview.component';
import { OrganizationComponent } from './organization/organization.component';
import { DepartmentsComponent } from './departments/departments.component';

const routes: Routes = [
  //http://localhost:4200
  {path:'',redirectTo:'home',pathMatch:'full'},
  //http://localhost:4200/home
  {path:'home', component:HomeComponent},
  //http://localhost:4200/about
  {path:'about',component:AboutComponent,children:[
    {path:'',redirectTo:'overview',pathMatch:'full'},
    {path:'overview', component:OverviewComponent},
    {path:'organization', component:OrganizationComponent},
    {path:'departments/:no', component:DepartmentsComponent}
  ]},
  //http://localhost:4200/contact
  {path:'contact',component:ContactComponent},
  {path:'**', component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
