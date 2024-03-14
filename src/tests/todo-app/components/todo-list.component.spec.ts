import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TodoListComponent } from '../../../app/todo-app/components/todo-list/todo-list.component';

describe('TodoListComponent', () => {
  let component: TodoListComponent;
  let fixture: ComponentFixture<TodoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodoListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TodoListComponent);
    component = fixture.componentInstance;

    const todos = [
      { id: 1, title: 'TEST Todo 1' },
      { id: 2, title: 'TEST Todo 2' },
    ];
    component.todos = todos; // Aquí pasas el objeto `todos` a tu componente

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have todos input', () => {
    const todos = [
      { id: 1, title: 'Todo 1' },
      { id: 2, title: 'Todo 2' },
    ];
    component.todos = todos;
    expect(component.todos).toEqual(todos);
  });

  it('should show item for each todo', () => {
    const todos = [
      { id: 1, title: 'Todo 1' },
      { id: 2, title: 'Todo 2' },
    ];
    component.todos = todos;

    fixture.detectChanges();

    const items = fixture.nativeElement.querySelectorAll('app-todo-list-item');

    expect(items.length).toEqual(todos.length);
  });
  it(`should show a no todos message if there's no todos`, () => {
    const todos: any[] = [];

    component.todos = todos;

    fixture.detectChanges();

    const items = fixture.nativeElement.querySelectorAll('app-todo-list-item');
    const message = fixture.nativeElement.querySelector('#no-todos-message');

    expect(todos.length).toEqual(0);
    expect(message).toBeTruthy();
  });
});
