import type { Task } from '../types/course';
import { TaskItem } from './TaskItem';

interface TaskListProps {
  tasks: Task[];
  progress: Record<string, boolean>;
  onToggle: (taskId: string, done: boolean) => void;
}

export function TaskList({ tasks, progress, onToggle }: TaskListProps) {
  if (tasks.length === 0) return null;

  return (
    <section className="task-list">
      <h3 className="section-heading">Tasks</h3>
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
    </section>
  );
}
