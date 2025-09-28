import { Component } from '@angular/core';
import { Task } from '../../models/task.model';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ProjectService } from '../project.service';
import { CommonModule } from '@angular/common';
import { TaskService } from '../../task/task.service';

@Component({
  selector: 'app-project-details',
  imports: [    CommonModule,RouterModule  ],
  templateUrl: './project-details.component.html',
  styleUrl: './project-details.component.css'
})
export class ProjectDetailsComponent {

  projectId: string = '';
  tasks: Task[] = [];

  constructor(
    private route: ActivatedRoute,
    private taskService:TaskService
  ) {}

  ngOnInit(): void {
    this.projectId = this.route.snapshot.paramMap.get('id') || '';
this.loadProjects()
 
  }
  loadProjects(): void {
  this.taskService.getTasksByProject(this.projectId).subscribe(data => {

    this.tasks = data;
    console.log("sdsdds.",this.tasks);
    
  });
}
}
