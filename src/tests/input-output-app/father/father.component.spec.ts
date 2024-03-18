import { ComponentFixture, TestBed } from '@angular/core/testing';

import { By } from '@angular/platform-browser';
import { FatherSonComponent } from '../../../app/input-output-app/father-son/father-son.component';
import { FatherComponent } from '../../../app/input-output-app/father/father.component';

describe('FatherComponent', () => {
  let component: FatherComponent;
  let fixture: ComponentFixture<FatherComponent>;
  let compiled: HTMLElement;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FatherComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should match the snapshot', () => {
    expect(compiled).toMatchSnapshot();
  });

  it('should set the client with the given name', () => {
    component.onSetClient('John');
    fixture.detectChanges();
    const codeElement = compiled.querySelector('.mt-2');

    expect(codeElement?.textContent).toContain('"name"');
    expect(codeElement?.textContent).toContain('"John"');
  });

  // TESTING PARENT COMPONENT
  // BASED ON OUTPUT EVENT EMITTER OF A CHILD COMPONENT
  test('should remove the client if onDeleteClient is emmited by the child component', () => {
    component.client = { name: 'Johnny', id: 1 };
    fixture.detectChanges();

    const sonDebugElement = fixture.debugElement.query(
      By.directive(FatherSonComponent)
    );
    const sonComponent =
      sonDebugElement.componentInstance as FatherSonComponent;

    sonComponent.onDeleteClient.emit();

    expect(component.client).toBeUndefined();
  });

  test('should update the client on client updated event', () => {
    component.client = { name: 'Johnny', id: 1 };
    fixture.detectChanges();

    const sonDebugElement = fixture.debugElement.query(
      By.directive(FatherSonComponent)
    );
    const sonComponent =
      sonDebugElement.componentInstance as FatherSonComponent;

    sonComponent.onClientUpdated.emit({ name: 'Jacque Fresco', id: 10 });

    expect(component.client).toEqual({ name: 'Jacque Fresco', id: 10 });
  });
});
