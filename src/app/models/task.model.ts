import { Project } from "./project.model";

export interface Task {
  _id?: string;
  name: string;
  description: string;
  priority: 'LOW' | 'MEDIUM' | 'HIGH' | 'URGENT';
  createdAt: Date;
  dueDate: Date;
  columnId: string;
  history: string[]; // Ajout du champ history
  project?: Project; 
}
