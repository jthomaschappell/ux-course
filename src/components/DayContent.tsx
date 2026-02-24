import type { Day } from '../types/course';
import { StudySection } from './StudySection';
import { DeliverableSection } from './DeliverableSection';
import { TaskList } from './TaskList';
import { ArtifactForm } from './ArtifactForm';
import type { StorageSchema } from '../types/progress';

interface DayContentProps {
  day: Day;
  taskProgress: Record<string, boolean>;
  artifacts: StorageSchema['artifacts'];
  onTaskToggle: (taskId: string, done: boolean) => void;
  onArtifactsChange: (artifacts: StorageSchema['artifacts']) => void;
}

export function DayContent({
  day,
  taskProgress,
  artifacts,
  onTaskToggle,
  onArtifactsChange,
}: DayContentProps) {
  return (
    <div
      id={`panel-${day.id}`}
      role="tabpanel"
      aria-labelledby={`tab-${day.id}`}
      className="day-content"
    >
      <StudySection items={day.studyItems} />
      <DeliverableSection
        title={day.deliverableTitle}
        description={day.deliverableDescription}
      />
      <TaskList
        tasks={day.tasks}
        progress={taskProgress}
        onToggle={onTaskToggle}
      />
      <ArtifactForm
        day={day}
        artifacts={artifacts}
        onArtifactsChange={onArtifactsChange}
      />
    </div>
  );
}
