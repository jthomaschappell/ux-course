import type { ReactNode } from 'react';
import { DayTabs } from './DayTabs';
import { ThemeToggle } from './ThemeToggle';
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
  const doneCount = days.reduce(
    (acc, day) => acc + (day.tasks?.filter((t) => taskProgress[day.id]?.[t.id]).length ?? 0),
    0
  );
  const progressPct = totalTasks > 0 ? Math.round((doneCount / totalTasks) * 100) : 0;
  const activeDay = days.find((day) => day.id === activeDayId);
  const completionTone = progressPct >= 70 ? 'Green' : 'Amber';
  const activeDayTasks = activeDay?.tasks ?? [];
  const activeDayProgress = activeDay ? taskProgress[activeDay.id] ?? {} : {};
  const activeDayDone = activeDayTasks.filter((task) => activeDayProgress[task.id]).length;
  const nextActionTask = activeDayTasks.find((task) => !activeDayProgress[task.id]);
  const nextActionLabel = nextActionTask
    ? nextActionTask.label
    : 'You completed this day. Review your artifacts or switch to the next day.';

  const handleStartNextAction = () => {
    if (nextActionTask) {
      document.getElementById(`panel-${activeDayId}`)?.scrollIntoView({ behavior: 'smooth' });
      setTimeout(() => {
        document.getElementById(`task-${nextActionTask.id}`)?.focus();
      }, 300);
    } else {
      document.getElementById('artifacts')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="layout">
      <header className="layout-header">
        <div className="layout-header-shell">
          <ThemeToggle />
          <div className="layout-hero-row">
            <div className="hero-message">
              <p className="layout-eyebrow">7-day designer growth system</p>
              <h1 className="layout-title">Build sharper UX judgment in one focused week.</h1>
              <p className="layout-subtitle">
                Strong information hierarchy, deliberate daily reps, and practical artifacts that
                show your thinking.
              </p>
              <div className="layout-intro-details">
                <p><strong>Who it&apos;s for:</strong> Designers and product people building UX fluency.</p>
                <p><strong>How to use:</strong> Work day-by-day. Complete study → tasks → artifacts in order.</p>
                <p><strong>Time:</strong> Roughly 1–2 hours per day.</p>
              </div>
            </div>
            <div className="hero-action-card">
              <p className="hero-action-kicker">Live focus</p>
              <h2 className="hero-action-heading">
                Next action from {activeDay?.shortLabel ?? 'today'}
              </h2>
              <p className="hero-action-task">{nextActionLabel}</p>
              <div className="hero-action-meta">
                <span className={`hero-action-chip ${nextActionTask ? 'amber' : 'green'}`}>
                  {nextActionTask ? 'Action pending' : 'Day complete'}
                </span>
                <span className="hero-action-stat">
                  {activeDayDone}/{activeDayTasks.length} tasks complete
                </span>
              </div>
              <button
                type="button"
                className="hero-action-cta"
                onClick={handleStartNextAction}
              >
                {nextActionTask ? 'Start next action' : 'Review artifacts'}
              </button>
            </div>
          </div>

          <div className="layout-progress-copy">
            <span>{activeDay?.title ?? 'Kickoff'}</span>
            <span>
              {progressPct}% complete ({completionTone} zone)
            </span>
          </div>
          <div className="layout-progress-track" aria-hidden="true">
            <div className="layout-progress-fill" style={{ width: `${progressPct}%` }} />
          </div>
          <DayTabs
            days={days}
            activeDayId={activeDayId}
            onSelect={onDaySelect}
            taskProgress={taskProgress}
            totalTasks={totalTasks}
          />
        </div>
      </header>
      <main className="layout-main">{children}</main>
    </div>
  );
}
