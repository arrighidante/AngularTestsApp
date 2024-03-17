import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FatherSonComponent } from '../../../app/input-output-app/father-son/father-son.component';

describe('FatherSonComponent', () => {
  let component: FatherSonComponent;
  let fixture: ComponentFixture<FatherSonComponent>;

  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FatherSonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FatherSonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.nativeElement;
    jest.clearAllMocks();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should match the snapshot', () => {
    expect(compiled).toMatchSnapshot();
  });

  it('should not show buttons if no client is provided', () => {
    const buttons = compiled.querySelectorAll('button');
    expect(buttons.length).toBe(0);
  });

  it('should show two buttons if a client is provided', () => {
    component.client = { name: 'John', id: 1 };
    fixture.detectChanges();

    const buttons = compiled.querySelectorAll('button');
    expect(buttons.length).toBe(2);
  });

  it('should emit onDeleteClient when the btn remove is clicked', () => {
    component.client = { name: 'John', id: 1 };
    fixture.detectChanges();

    // Jest fn to catch emit on the specified event
    jest.spyOn(component.onDeleteClient, 'emit');

    const btnRemove = compiled.querySelector('[data-test=btn-remove]');
    btnRemove?.dispatchEvent(new Event('click'));

    expect(component.onDeleteClient.emit).toHaveBeenCalled();
  });

  it('should emit onClientUpdated when the btn change is clicked', () => {
    component.client = { name: 'John', id: 1 };
    fixture.detectChanges();

    // Jest fn to catch emit on the specified event
    jest.spyOn(component.onClientUpdated, 'emit');

    const btnChangeId = compiled.querySelector('[data-test=btn-change]');
    btnChangeId?.dispatchEvent(new Event('click'));

    expect(component.onClientUpdated.emit).toHaveBeenCalledWith({
      id: 5,
      name: 'John',
    });
  });

  it('should emit onChangeClient with the specified ID IF there is a client', () => {
    jest.spyOn(component.onClientUpdated, 'emit');
    component.onChange(10);

    expect(component.onClientUpdated.emit).not.toHaveBeenCalled();

    component.client = { name: 'John', id: 1 };
    fixture.detectChanges();
    component.onChange(10);

    expect(component.onClientUpdated.emit).toHaveBeenCalledWith({
      id: 10,
      name: 'John',
    });
  });
});
