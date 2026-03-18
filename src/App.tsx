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
      <div className="app-stripe" aria-hidden="true">
        <svg
          className="app-stripe-svg"
          viewBox="0 0 1200 1200"
          preserveAspectRatio="xMidYMid slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient
              id="stripe-gradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#ff6f2d" stopOpacity="0.5" />
              <stop offset="40%" stopColor="#ff8249" stopOpacity="0.42" />
              <stop offset="70%" stopColor="#444444" stopOpacity="0.28" />
              <stop offset="100%" stopColor="#191919" stopOpacity="0.18" />
            </linearGradient>
            <linearGradient
              id="stripe-gradient-soft"
              x1="20%"
              y1="0%"
              x2="80%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#ff6f2d" stopOpacity="0.28" />
              <stop offset="50%" stopColor="#646464" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#191919" stopOpacity="0.14" />
            </linearGradient>
          </defs>
          {/* Diagonal ribbon: top-left to bottom-right */}
          <path
            className="app-stripe-path"
            d="M-80 0 L1280 1200 L1120 1200 L-240 0 Z"
            fill="url(#stripe-gradient)"
          />
          {/* Inner diagonal band for depth */}
          <path
            className="app-stripe-path app-stripe-path--soft"
            d="M60 60 L1140 1140 L1000 1140 L-80 60 Z"
            fill="url(#stripe-gradient-soft)"
          />
        </svg>
      </div>
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
