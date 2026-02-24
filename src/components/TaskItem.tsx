import { Checkbox } from './Checkbox';

interface TaskItemProps {
  id: string;
  label: string;
  done: boolean;
  onToggle: (done: boolean) => void;
}

export function TaskItem({ id, label, done, onToggle }: TaskItemProps) {
  return (
    <Checkbox
      id={`task-${id}`}
      checked={done}
      onChange={onToggle}
      label={label}
    />
  );
}
