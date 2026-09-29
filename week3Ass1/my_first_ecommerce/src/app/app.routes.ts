import { Routes } from '@angular/router';
import { Lacescomponent } from './lacescomponent/lacescomponent';
import { ShoesandbagsComponent } from './shoesandbags-component/shoesandbags-component';
import {Login} from './login/login';

export const routes: Routes = [
  { path: 'laces', component: Lacescomponent },
  { path: 'shoesandbags', component: ShoesandbagsComponent },
  { path: 'login', component: Login },
  { path: '', redirectTo: 'laces', pathMatch: 'full' }
];
