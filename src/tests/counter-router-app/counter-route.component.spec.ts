import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { RouterTestingHarness } from '@angular/router/testing';
import { routes } from '../../app/app.routes';
import { CounterRouteComponent } from '../../app/counter-route-app/counter-route/counter-route.component';

describe('CounterRouteComponent', () => {
  let component: CounterRouteComponent;
  let fixture: ComponentFixture<CounterRouteComponent>;
  let harness: RouterTestingHarness;

  // beforeEach it's commented since I want to use the TestBed.configureTestingModule
  // with different configurations for each test

  // beforeEach(async () => {
  //   await TestBed.configureTestingModule({
  //     imports: [CounterRouteComponent, RouterModule.forRoot(routes)],
  //   }).compileComponents();

  //   fixture = TestBed.createComponent(CounterRouteComponent);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();
  // });

  it('should create', async () => {
    await TestBed.configureTestingModule({
      imports: [CounterRouteComponent, RouterModule.forRoot(routes)],
    }).compileComponents();

    fixture = TestBed.createComponent(CounterRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    expect(component).toBeTruthy();
  });

  it('should set counter value with route param', async () => {
    await TestBed.configureTestingModule({
      imports: [CounterRouteComponent, RouterModule.forRoot(routes)],
    }).compileComponents();

    fixture = TestBed.createComponent(CounterRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    harness = await RouterTestingHarness.create();
    const initialValueParam = 8;

    const myComponent = await harness.navigateByUrl(
      `counter-app/counter/${initialValueParam}`,
      CounterRouteComponent
    );
    const counterH1Title =
      harness.routeNativeElement?.querySelector('h1')?.textContent;

    expect(myComponent.counter).toBe(8);
    expect(counterH1Title).toContain('Counter');
  });

  it('should have counter value 100 in the route counter-app/counter/100', async () => {
    const mockActivatedRoute = {
      snapshot: {
        paramMap: {
          get(param: string) {
            return param === 'initial' ? '100' : undefined;
          },
        },
      },
    };

    await TestBed.configureTestingModule({
      imports: [CounterRouteComponent],
      providers: [{ provide: ActivatedRoute, useValue: mockActivatedRoute }],
    }).compileComponents();
    fixture = TestBed.createComponent(CounterRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    expect(component.counter).toBe(100);
  });
  it('should have counter value 10 in the route counter-app/counter/ABC', async () => {
    const mockActivatedRoute = {
      snapshot: {
        paramMap: {
          get(param: string) {
            return param === 'initial' ? 'ABC' : undefined;
          },
        },
      },
    };

    await TestBed.configureTestingModule({
      imports: [CounterRouteComponent],
      providers: [{ provide: ActivatedRoute, useValue: mockActivatedRoute }],
    }).compileComponents();

    fixture = TestBed.createComponent(CounterRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    expect(component.counter).toBe(10);
  });
});
