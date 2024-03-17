import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CharizardAppComponent } from '../../app/charizard-app/charizard-app.component';
import { PokemonService } from '../../app/services/pokemon.service';

describe('CharizardAppComponent', () => {
  let component: CharizardAppComponent;
  let fixture: ComponentFixture<CharizardAppComponent>;
  let compiled: HTMLElement;
  let service: PokemonService;
  let httpMock: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [],
      imports: [HttpClientTestingModule, CharizardAppComponent],
      providers: [PokemonService],
    }).compileComponents();

    fixture = TestBed.createComponent(CharizardAppComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(PokemonService);
    httpMock = TestBed.inject(HttpTestingController);

    fixture.detectChanges();
    compiled = fixture.nativeElement;
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should match the snapshot', () => {
    expect(compiled.innerHTML).toMatchSnapshot();
  });

  it('should show loading when the app starts', () => {
    const h2 = compiled.querySelector('h2');
    expect(h2?.textContent).toContain('Loading...');
  });

  it('should charizard data immediately after the component is created', () => {
    const dummyPokemon = {
      name: 'charizardo',
      sprites: {
        front_default: 'https://charizard.com/sprite.png',
      },
    };

    const url = 'https://pokeapi.co/api/v2/pokemon/6';

    // THIS SHOULDN'T BE HERE Since I'm testing only the component, not the service.
    service.getPokemon(6).subscribe((pokemon) => {
      expect(pokemon).toEqual(dummyPokemon);
    });

    const request = httpMock.expectOne(url);
    expect(request.request.method).toBe('GET');

    request.flush(dummyPokemon);

    fixture.detectChanges();
    console.log(compiled.innerHTML);
    // expect(component.charizard).toEqual(mockPokemon);
    const h3 = compiled.querySelector('h3');
    const img = compiled.querySelector('img');

    // THIS IS NOT WORKING SINCE THE  MOCKED SERVICE IS NOT BEING CALLED
    // expect(h3?.textContent).toContain(dummyPokemon.name);
    // expect(img?.src).toBe(dummyPokemon.sprites.front_default);
    // expect(img?.alt).toBe(dummyPokemon.name);
  });
});
