import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FatherSonComponent } from '../father-son/father-son.component';
import { Client } from '../interfaces/client';

@Component({
  selector: 'app-father',
  standalone: true,
  imports: [FatherSonComponent, CommonModule],
  templateUrl: './father.component.html',
  styleUrl: './father.component.scss',
})
export class FatherComponent {
  public client?: Client;

  onSetClient(name: string) {
    this.client = { name, id: 1 };
  }
}
