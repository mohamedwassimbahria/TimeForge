import { Task } from "./task.model";

export interface Project {
  project_id?: string;
  title: string;
  description: string;
  startDate?: Date | null; 
  endDate?: Date | null;
  category?: 'SOFTWARE_DEVELOPMENT' | 'MARKETING' | 'EDUCATION'
  | 'RESEARCH' | 'FINANCE'| 'DESIGN' | 'HEALTHCARE'| 'CONSTRUCTION';
  task?: Task[];
  useAI?: boolean;
}


    