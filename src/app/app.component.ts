import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { TodoComponent } from './todo-app/todo.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, TodoComponent, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'MyTestApp';

  items = [
    { title: 'OK - Configurar JEST', link: '' },
    {
      title: 'OK - Crear componente y Testearlo',
      link: '',
    },

    {
      title: 'Counter App',
      link: 'counter-app/counter',
    },
  ];
}
