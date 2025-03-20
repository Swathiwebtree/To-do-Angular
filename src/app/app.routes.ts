import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { ThirdComponent } from './third/third.component'; 

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'first', component: FirstComponent },
  { path: 'second', component: SecondComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: ThirdComponent }
];



