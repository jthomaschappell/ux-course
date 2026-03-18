import { useState } from 'react';
import { Layout } from './components/Layout';
import { DayContent } from './components/DayContent';
import { ReferencePanel } from './components/ReferencePanel';
import { usePersistedProgress } from './hooks/usePersistedState';
import { DAYS } from './data/days';
import type { DayId } from './types/course';
import type { TaskProgress } from './types/progress';

function App() {
  const [progress, setProgress] = usePersistedProgress();
  const [activeDayId, setActiveDayId] = useState<DayId>('day1');

  const activeDay = DAYS.find((d) => d.id === activeDayId) ?? DAYS[0];

  const taskProgressForDay = (progress.taskProgress[activeDay.id] ?? {}) as Record<string, boolean>;

  const handleTaskToggle = (taskId: string, done: boolean) => {
    setProgress((prev) => ({
      ...prev,
      taskProgress: {
        ...prev.taskProgress,
        [activeDay.id]: {
          ...prev.taskProgress[activeDay.id],
          [taskId]: done,
        },
      },
    }));
  };

  const handleArtifactsChange = (artifacts: typeof progress.artifacts) => {
    setProgress((prev) => ({
      ...prev,
      artifacts: { ...prev.artifacts, ...artifacts },
    }));
  };

  return (
    <div className="app">
      <Layout
        days={DAYS}
        activeDayId={activeDayId}
        onDaySelect={(id) => setActiveDayId(id as DayId)}
        taskProgress={progress.taskProgress as TaskProgress}
      >
        <div className="app-content">
          <DayContent
            day={activeDay}
            taskProgress={taskProgressForDay}
            artifacts={progress.artifacts}
            onTaskToggle={handleTaskToggle}
            onArtifactsChange={handleArtifactsChange}
          />
        </div>
      </Layout>
      <ReferencePanel />
    </div>
  );
}

export default App;
