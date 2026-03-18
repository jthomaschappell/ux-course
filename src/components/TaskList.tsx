import type { Task } from '../types/course';
import { TaskItem } from './TaskItem';

interface TaskListProps {
  tasks: Task[];
  progress: Record<string, boolean>;
  onToggle: (taskId: string, done: boolean) => void;
}

export function TaskList({ tasks, progress, onToggle }: TaskListProps) {
  return (
    <section className="task-list">
      <h3 className="section-heading">Tasks</h3>
      {tasks.length > 0 ? (
        <ul className="task-list-ul">
          {tasks.map((task) => (
            <li key={task.id}>
              <TaskItem
                id={task.id}
                label={task.label}
                done={!!progress[task.id]}
                onToggle={(done) => onToggle(task.id, done)}
              />
            </li>
          ))}
        </ul>
      ) : (
        <p className="task-list-empty">No tasks for this day.</p>
      )}
    </section>
  );
}
