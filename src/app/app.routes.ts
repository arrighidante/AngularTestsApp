import { Routes } from '@angular/router';
import { CharizardAppComponent } from './charizard-app/charizard-app.component';
import { CounterRouteComponent } from './counter-route-app/counter-route/counter-route.component';
import { FatherComponent } from './input-output-app/father/father.component';

export const routes: Routes = [
  {
    path: 'counter-app/counter/:initial',
    component: CounterRouteComponent,
  },
  // {
  //   path: 'counter-app/counter',
  //   component: CounterComponent,
  // },
  {
    path: 'father',
    component: FatherComponent,
  },
  {
    path: '**',
    component: CharizardAppComponent,
  },
];
