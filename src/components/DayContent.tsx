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
  const dayTotal = day.tasks.length;
  const dayDone = day.tasks.filter((task) => taskProgress[task.id]).length;

  return (
    <div
      id={`panel-${day.id}`}
      role="tabpanel"
      aria-labelledby={`tab-${day.id}`}
      className="day-content bento-grid"
    >
      <section className="day-intro">
        <p className="day-kicker">{day.shortLabel}</p>
        <h2 className="day-title">{day.title}</h2>
        <p className="day-meta">
          {dayDone}/{dayTotal} tasks complete
        </p>
        {day.objective && (
          <p className="day-objective">
            <strong>Why this day:</strong> {day.objective}
          </p>
        )}
        {(day.estimatedMinutes ?? day.oneThingToNail) && (
          <div className="day-context">
            {day.estimatedMinutes != null && (
              <span className="day-estimate">~{day.estimatedMinutes} min</span>
            )}
            {day.oneThingToNail && (
              <p className="day-one-thing">
                <strong>One thing to nail:</strong> {day.oneThingToNail}
              </p>
            )}
          </div>
        )}
      </section>
      <div className="bento-card bento-study">
        <StudySection items={day.studyItems} />
      </div>
      <div className="bento-card bento-deliverable">
        <DeliverableSection
          title={day.deliverableTitle}
          description={day.deliverableDescription}
        />
      </div>
      <div className="bento-card bento-tasks">
        <TaskList
          tasks={day.tasks}
          progress={taskProgress}
          onToggle={onTaskToggle}
        />
      </div>
      <div className="bento-card bento-artifacts">
        <ArtifactForm
          day={day}
          artifacts={artifacts}
          onArtifactsChange={onArtifactsChange}
        />
      </div>
    </div>
  );
}
