
// src/app/models/time-log.model.ts
export interface TimeLog {
  id?: string;
  user: any; // or create a proper User interface
  startTime: string; // ISO format datetime
  endTime?: string;
  durationMinutes?: number;
  activityDescription: string;
  projectId?: string;
  isActive?: boolean;
  createdAt?: string;
}
