import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { PokemonService } from '../../app/services/pokemon.service';

describe('PokemonService', () => {
  let service: PokemonService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(PokemonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get bulbasaur data', (done) => {
    service.getPokemon(1).subscribe((pokemon) => {
      expect(pokemon.name).toBe('bulbasaur');
      done();
    });
  });
});
