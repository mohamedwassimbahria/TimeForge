import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import {CommonModule, NgForOf, NgIf} from '@angular/common';
import { Project } from '../../models/project.model';
import { ProjectService } from '../project.service';
import { Task } from '../../models/task.model';
import { TaskService } from '../../task/task.service';

@Component({
  selector: 'app-project-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './project-form.component.html',
  styleUrl: './project-form.component.css'
})

export class ProjectFormComponent implements OnInit {
  project: Project = {
    project_id: '',
    title: '',
    description: '',
    category: 'DESIGN',
    startDate: new Date(),
    endDate: undefined,
    task: [],
    useAI: false // ➔ Ajouté
  };
  
  selectedTasks: Task[] = [];
  tasks: Task[] = [];
  isEdit: boolean = false;

  constructor(
    private projectService: ProjectService,
    private taskService: TaskService,
    private route: ActivatedRoute,
    protected router: Router
  ) {}

  ngOnInit(): void {
    this.taskService.getAllTasks().subscribe(data => {
      this.tasks = data;
    });
    const id = this.route.snapshot.paramMap.get('id');
    console.log("sdddddddsd",id);
    
    if (id) {
      this.isEdit = true;
      this.projectService.getProjectById(id).subscribe(data => {
        this.project = data;
      });
    }
  }

  
  saveProject() {

    if (this.isEdit) {
      console.log("this.kkkkkkkkk",this.project)
      this.projectService.updateProject(this.project).subscribe({
        next: () => this.router.navigate(['/projects']),
        error: err => console.error('❌ Erreur:', err)
      });
    } else {
      this.projectService.createProject(this.project).subscribe({
        next: () => this.router.navigate(['/projects']),
        error: err => console.error('❌ Erreur:', err)
      });
    }
  }

}
