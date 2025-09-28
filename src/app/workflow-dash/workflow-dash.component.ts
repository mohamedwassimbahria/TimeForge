import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {NgForOf} from '@angular/common';


interface NavItem {
  link: string;
  icon: string;
  label: string;
}

@Component({
  selector: 'app-workflow-dash',
  imports: [
    RouterLink,
    RouterLinkActive,
    NgForOf
  ],
  templateUrl: './workflow-dash.component.html',
  standalone: true,
  styleUrl: './workflow-dash.component.css'
})
export class WorkflowDashComponent {

  navItems: NavItem[] = [
    { link: '/workflows', icon: 'fas fa-list-ul', label: 'All Workflows' },
    { link: '/workflows/add', icon: 'fas fa-plus-circle', label: 'Create Workflow' },
    { link: '/workflows/predict', icon: 'fas fa-brain', label: 'Predict Outcomes' },
    { link: '/workflows/stats', icon: 'fas fa-chart-line', label: 'Analytics & Stats' },
    { link: '/workflows/calendar', icon: 'fas fa-calendar-alt', label: 'Calendar View' }
  ];


}
