import { Column } from './column.model';
import { Project } from './project.model';

export interface Board {
  _id?:string;
  title: string;
  description:string;
  columns?: Column[];
  project?: Project; 

  }