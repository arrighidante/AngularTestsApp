import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CounterComponent } from '../../../app/counter-app/counter/counter.component';

describe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CounterComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    compiled = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should match the snapshot', () => {
    expect(compiled).toMatchSnapshot();
  });

  it('increaseBy(value: number) should increase the counter based on the value', () => {
    component.increaseBy(4);
    expect(component.counter).toBe(14);
  });

  it('should increase or decrease the counter when btn +1 or -1 is clicked', () => {
    const buttons = compiled.querySelectorAll('button');
    buttons[0].click();
    expect(component.counter).toBe(11);
    buttons[1].click();
    buttons[1].click();
    expect(component.counter).toBe(9);
  });

  it('should change the counter value in the screen when increaseBy(value: number) is called', () => {
    component.increaseBy(10);
    const h1 = compiled.querySelector('h1');

    fixture.detectChanges();
    expect(h1?.textContent).toContain('20');
  });
});
