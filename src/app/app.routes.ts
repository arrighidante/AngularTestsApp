import { Routes } from '@angular/router';
import { CharizardAppComponent } from './charizard-app/charizard-app.component';
import { CounterComponent } from './counter-app/counter/counter.component';
import { FatherComponent } from './input-output-app/father/father.component';

export const routes: Routes = [
  {
    path: 'counter-app/counter',
    component: CounterComponent,
  },
  {
    path: 'father',
    component: FatherComponent,
  },
  {
    path: '**',
    component: CharizardAppComponent,
  },
];
