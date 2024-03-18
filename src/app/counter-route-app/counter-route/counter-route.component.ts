import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-counter-route',
  standalone: true,
  imports: [],
  templateUrl: './counter-route.component.html',
  styleUrl: './counter-route.component.scss',
})
export class CounterRouteComponent implements OnInit {
  public counter: number = 10;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const initial = Number(this.route.snapshot.paramMap.get('initial'));
    this.counter = isNaN(initial) ? 10 : initial;
  }

  increaseBy(value: number) {
    this.counter += value;
  }
}
