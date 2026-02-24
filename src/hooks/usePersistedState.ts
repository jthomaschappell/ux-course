import { useCallback, useState } from 'react';
import type { StorageSchema } from '../types/progress';

const STORAGE_KEY = 'ux-course-v1';

function getSnapshot(): StorageSchema {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return getDefaultSchema();
    const parsed = JSON.parse(raw) as StorageSchema;
    if (parsed?.version !== 1) return getDefaultSchema();
    return {
      version: 1,
      taskProgress: parsed.taskProgress ?? {},
      artifacts: parsed.artifacts ?? {},
    };
  } catch {
    return getDefaultSchema();
  }
}

function getDefaultSchema(): StorageSchema {
  return {
    version: 1,
    taskProgress: {},
    artifacts: {},
  };
}

export function saveProgress(data: StorageSchema): void {
  try {
    const toSave = {
      version: data.version,
      taskProgress: data.taskProgress ?? {},
      artifacts: Object.fromEntries(
        Object.entries(data.artifacts ?? {}).filter(([, v]) => v != null && JSON.stringify(v) !== '{}')
      ) as StorageSchema['artifacts'],
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(toSave));
  } catch {
    // Ignore quota/parse errors
  }
}

export function usePersistedProgress(): [StorageSchema, (updater: (prev: StorageSchema) => StorageSchema) => void] {
  const [stored, setStored] = useState<StorageSchema>(getSnapshot);

  const setProgress = useCallback((updater: (prev: StorageSchema) => StorageSchema) => {
    setStored((prev) => {
      const next = updater(prev);
      saveProgress(next);
      return next;
    });
  }, []);

  return [stored, setProgress];
}
