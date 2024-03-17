import { TitleCasePipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { PokemonService } from '../services/pokemon.service';
import { Pokemon } from './interfaces';

@Component({
  selector: 'app-charizard-app',
  standalone: true,
  imports: [TitleCasePipe, HttpClientModule, ReactiveFormsModule],
  templateUrl: './charizard-app.component.html',
  styleUrl: './charizard-app.component.scss',
})
export class CharizardAppComponent implements OnInit {
  constructor(private pokemonService: PokemonService) {}
  public charizard?: Pokemon;

  clientForm = new FormGroup({
    name: new FormControl('', [Validators.minLength(4)]),
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
    ]),
  });

  ngOnInit(): void {
    this.pokemonService.getPokemon(6).subscribe((pokemon) => {
      this.charizard = pokemon;
    });
  }

  submitForm() {
    console.log(this.clientForm);
  }
}
