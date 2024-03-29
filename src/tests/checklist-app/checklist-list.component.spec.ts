import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { subscribeSpyTo } from '@hirez_io/observer-spy';
import { ChecklistListComponent } from '../../app/checklist-app/checklist-list/checklist-list.component';
describe('ChecklistListComponent', () => {
  let component: ChecklistListComponent;
  let fixture: ComponentFixture<ChecklistListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChecklistListComponent],
    })
      .overrideComponent(ChecklistListComponent, {
        remove: { imports: [] },
        add: { imports: [] },
      })
      .compileComponents();

    fixture = TestBed.createComponent(ChecklistListComponent);
    component = fixture.componentInstance;

    component.checklists = [];

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('input: checklists', () => {
    it('should render a list of items for each element', () => {
      const testData = [{}, {}, {}] as any;
      component.checklists = testData;
      fixture.detectChanges();

      const result = fixture.debugElement.queryAll(
        By.css('[data-testid="checklist-item"]')
      );
      expect(result.length).toEqual(testData.length);
    });

    it('should render empty message when checklists are empty', () => {
      const testData = [] as any;
      component.checklists = testData;

      fixture.detectChanges();

      const emptyMessage = fixture.debugElement.query(
        By.css('[data-testid="no-checklists-message"]')
      );

      expect(emptyMessage).toBeTruthy();
    });

    it('should NOT render empty if there are checklists', () => {
      const testData = [{}] as any;
      component.checklists = testData;

      fixture.detectChanges();

      const emptyMessage = fixture.debugElement.query(
        By.css('[data-testid="no-checklists-message"]')
      );

      expect(emptyMessage).toBeFalsy();
    });
  });

  describe('output: delete', () => {
    it('should emit checklist id to be deleted', () => {
      const testData = [{ id: 1, title: 'test' }] as any;
      component.checklists = testData;

      const observerSpy = subscribeSpyTo(component.delete);

      fixture.detectChanges();

      const deleteButton = fixture.debugElement.query(
        By.css('[data-testid="delete-checklist"]')
      );
      deleteButton.nativeElement.click();

      expect(observerSpy.getLastValue()).toEqual(testData[0].id);
    });
  });
});
