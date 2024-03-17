import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FatherComponent } from '../../../app/input-output-app/father/father.component';

describe('FatherComponent', () => {
  let component: FatherComponent;
  let fixture: ComponentFixture<FatherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FatherComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
