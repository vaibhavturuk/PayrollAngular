import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "app/Home/home.component";


const routes: Routes = [
    {
        path: '', component: HomeComponent,
        children: [
           {path:'Our-Solutions',loadChildren:'./Our-Solutions/Our-Solution.module#OurSolutionModule'},
           {path:'Offers',loadChildren:'./Offers/Offers.module#OffersModule'},
             { path: 'login', loadChildren: './login/login.module#LoginModule' },
               { path: 'signup', loadChildren: './signup/signup.module#SignupModule' }
              
          ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomeRoutingModule { }
