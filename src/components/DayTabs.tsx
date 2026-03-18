import { useCallback } from 'react';
import type { Day } from '../types/course';
import type { TaskProgress } from '../types/progress';

interface DayTabsProps {
  days: Day[];
  activeDayId: string;
  onSelect: (dayId: string) => void;
  taskProgress: TaskProgress;
  totalTasks: number;
}

export function DayTabs({ days, activeDayId, onSelect, taskProgress, totalTasks }: DayTabsProps) {
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      const idx = days.findIndex((d) => d.id === activeDayId);
      if (e.key === 'ArrowLeft' && idx > 0) {
        e.preventDefault();
        onSelect(days[idx - 1].id);
      } else if (e.key === 'ArrowRight' && idx >= 0 && idx < days.length - 1) {
        e.preventDefault();
        onSelect(days[idx + 1].id);
      }
    },
    [days, activeDayId, onSelect]
  );
  const doneCount = days.reduce(
    (acc, day) =>
      acc +
      (day.tasks?.filter((t) => taskProgress[day.id]?.[t.id]).length ?? 0),
    0
  );
  const progressPct = totalTasks > 0 ? Math.round((doneCount / totalTasks) * 100) : 0;

  return (
    <div
      className="day-tabs"
      role="tablist"
      aria-label="Course days"
      onKeyDown={handleKeyDown}
    >
      <div className="day-tabs-progress" aria-live="polite">
        Course progress: {doneCount}/{totalTasks} tasks ({progressPct}%)
      </div>
      <div className="day-tabs-list">
        {days.map((day) => {
          const dayDone = day.tasks?.filter((t) => taskProgress[day.id]?.[t.id]).length ?? 0;
          const dayTotal = day.tasks?.length ?? 0;
          const isActive = activeDayId === day.id;

          return (
            <button
              key={day.id}
              role="tab"
              aria-selected={isActive}
              aria-controls={`panel-${day.id}`}
              id={`tab-${day.id}`}
              className={`day-tab ${isActive ? 'active' : ''}`}
              onClick={() => onSelect(day.id)}
              tabIndex={isActive ? 0 : -1}
            >
              {day.shortLabel}
              {dayTotal > 0 && (
                <span className="day-tab-badge">
                  {dayDone}/{dayTotal}
                </span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
