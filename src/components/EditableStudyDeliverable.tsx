import { useState, useEffect } from 'react';
import type { Day } from '../types/course';
import { StudySection } from './StudySection';
import { SectionHeading } from './SectionHeading';

interface EditSnapshot {
  studyItems: string[];
  deliverableTitle: string;
  deliverableDescription: string;
}

function snapshot(studyItems: string[], deliverableTitle: string, deliverableDescription: string): EditSnapshot {
  return {
    studyItems: studyItems.slice(),
    deliverableTitle,
    deliverableDescription,
  };
}

interface EditableStudyDeliverableProps {
  day: Day;
}

export function EditableStudyDeliverable({ day }: EditableStudyDeliverableProps) {
  const [studyItems, setStudyItems] = useState<string[]>(day.studyItems);
  const [deliverableTitle, setDeliverableTitle] = useState(day.deliverableTitle);
  const [deliverableDescription, setDeliverableDescription] = useState(day.deliverableDescription);
  const [isEditMode, setIsEditMode] = useState(false);
  const [past, setPast] = useState<EditSnapshot[]>([]);
  const [future, setFuture] = useState<EditSnapshot[]>([]);

  // Reset when switching to a different day
  useEffect(() => {
    setStudyItems(day.studyItems);
    setDeliverableTitle(day.deliverableTitle);
    setDeliverableDescription(day.deliverableDescription);
    setPast([]);
    setFuture([]);
  }, [day.id]);

  const pushPast = () => {
    setPast((p) => [...p, snapshot(studyItems, deliverableTitle, deliverableDescription)]);
    setFuture([]);
  };

  const handleToggleEdit = () => {
    if (isEditMode) {
      pushPast();
    }
    setIsEditMode((v) => !v);
  };

  const handleUndo = () => {
    if (past.length === 0) return;
    const prev = past[past.length - 1];
    setFuture((f) => [snapshot(studyItems, deliverableTitle, deliverableDescription), ...f]);
    setPast((p) => p.slice(0, -1));
    setStudyItems(prev.studyItems);
    setDeliverableTitle(prev.deliverableTitle);
    setDeliverableDescription(prev.deliverableDescription);
  };

  const handleRedo = () => {
    if (future.length === 0) return;
    const next = future[0];
    setPast((p) => [...p, snapshot(studyItems, deliverableTitle, deliverableDescription)]);
    setFuture((f) => f.slice(1));
    setStudyItems(next.studyItems);
    setDeliverableTitle(next.deliverableTitle);
    setDeliverableDescription(next.deliverableDescription);
  };

  const canUndo = past.length > 0;
  const canRedo = future.length > 0;

  const toolbar = (
    <div className="editable-toolbar" aria-label="Edit controls">
      <button
        type="button"
        className="editable-toolbar-btn"
        onClick={handleToggleEdit}
        aria-pressed={isEditMode}
        aria-label={isEditMode ? 'Exit edit mode' : 'Edit mode'}
        title={isEditMode ? 'Exit edit mode' : 'Edit'}
      >
        <PencilIcon />
      </button>
      <button
        type="button"
        className="editable-toolbar-btn"
        onClick={handleUndo}
        disabled={!canUndo}
        aria-label="Undo"
        title="Undo"
      >
        <UndoIcon />
      </button>
      <button
        type="button"
        className="editable-toolbar-btn"
        onClick={handleRedo}
        disabled={!canRedo}
        aria-label="Redo"
        title="Redo"
      >
        <RedoIcon />
      </button>
    </div>
  );

  return (
    <>
      <div className="bento-card bento-study">
        <div className="study-section-header">
          <SectionHeading>Study</SectionHeading>
          {toolbar}
        </div>
        {isEditMode ? (
          <ul className="study-edit-list">
            {studyItems.map((item, i) => (
              <li key={i}>
                <input
                  type="text"
                  value={item}
                  onChange={(e) => {
                    const next = studyItems.slice();
                    next[i] = e.target.value;
                    setStudyItems(next);
                  }}
                  className="study-edit-input"
                  aria-label={`Study item ${i + 1}`}
                />
              </li>
            ))}
          </ul>
        ) : (
          <StudySection items={studyItems} hideHeading />
        )}
      </div>
      <div className="bento-card bento-deliverable">
        <section className="deliverable-section">
          {isEditMode ? (
            <>
              <SectionHeading>Deliverable:</SectionHeading>
              <label className="deliverable-edit-label" htmlFor="deliverable-title">
                Title
              </label>
              <input
                id="deliverable-title"
                type="text"
                value={deliverableTitle}
                onChange={(e) => setDeliverableTitle(e.target.value)}
                className="deliverable-edit-title"
                aria-label="Deliverable title"
              />
              <label className="deliverable-edit-label" htmlFor="deliverable-description">
                Description
              </label>
              <textarea
                id="deliverable-description"
                value={deliverableDescription}
                onChange={(e) => setDeliverableDescription(e.target.value)}
                className="deliverable-edit-description"
                rows={12}
              />
            </>
          ) : (
            <>
              <SectionHeading>{`Deliverable: ${deliverableTitle}`}</SectionHeading>
              <div className="deliverable-description">{deliverableDescription}</div>
            </>
          )}
        </section>
      </div>
    </>
  );
}

function PencilIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
    </svg>
  );
}

function UndoIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M3 10h10a5 5 0 0 1 5 5v2" />
      <path d="M7 15 3 11l4-4" />
    </svg>
  );
}

function RedoIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M21 10H11a5 5 0 0 0-5 5v2" />
      <path d="M17 15l4-4-4-4" />
    </svg>
  );
}
