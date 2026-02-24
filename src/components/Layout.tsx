import type { ReactNode } from 'react';
import { DayTabs } from './DayTabs';
import type { Day } from '../types/course';
import type { TaskProgress } from '../types/progress';

interface LayoutProps {
  children: ReactNode;
  days: Day[];
  activeDayId: string;
  onDaySelect: (dayId: string) => void;
  taskProgress: TaskProgress;
}

export function Layout({
  children,
  days,
  activeDayId,
  onDaySelect,
  taskProgress,
}: LayoutProps) {
  const totalTasks = days.reduce((acc, d) => acc + (d.tasks?.length ?? 0), 0);

  return (
    <div className="layout">
      <header className="layout-header">
        <h1 className="layout-title">7-Day UX Fluency Plan</h1>
        <DayTabs
          days={days}
          activeDayId={activeDayId}
          onSelect={onDaySelect}
          taskProgress={taskProgress}
          totalTasks={totalTasks}
        />
      </header>
      <main className="layout-main">{children}</main>
    </div>
  );
}
