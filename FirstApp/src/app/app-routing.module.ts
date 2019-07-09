import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { EventsComponent } from './events/events.component';
import { SpecialComponent } from './special/special.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
            {path:'',component:EventsComponent,
            pathMatch:'full'
          },
						{path:'register', component:SignupComponent},
            {path:'login', component:LoginComponent},
            {
              path:'events' ,component:EventsComponent
            },
            {path:'spacial',component:SpecialComponent,
            canActivate:[AuthGuard]//this is use for frontend authentication 
          }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
