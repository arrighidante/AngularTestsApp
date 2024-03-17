import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Client } from '../interfaces/client';

@Component({
  selector: 'app-father-son',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './father-son.component.html',
  styleUrl: './father-son.component.scss',
})
export class FatherSonComponent {
  @Input() client?: Client;
  @Output() onDeleteClient = new EventEmitter();
  @Output() onClientUpdated = new EventEmitter<Client>();

  onDelete() {
    this.client = undefined;
    this.onDeleteClient.emit();
  }

  onChange(newId: number) {
    if (!this.client) return;
    this.client = {
      ...this.client,
      id: newId,
    };
    this.onClientUpdated.emit({ ...this.client });
  }
}
