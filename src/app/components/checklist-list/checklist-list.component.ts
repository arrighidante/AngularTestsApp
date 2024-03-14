import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-checklist-list',
  standalone: true,
  imports: [],
  templateUrl: './checklist-list.component.html',
  styleUrl: './checklist-list.component.scss',
})
export class ChecklistListComponent {
  @Input({ required: true }) checklists!: any[];
  @Output() delete = new EventEmitter<string>();
}
