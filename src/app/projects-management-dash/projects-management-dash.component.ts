import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {NgForOf} from '@angular/common';

interface NavItem {
  link: string;
  icon: string;
  label: string;
}
@Component({
  selector: 'app-projects-management-dash',
  imports: [
    RouterLink,
    RouterLinkActive,
    NgForOf
  ],
  templateUrl: './projects-management-dash.component.html',
  standalone: true,
  styleUrl: './projects-management-dash.component.css'
})
export class ProjectsManagementDashComponent {
  navItems: NavItem[] = [
    {link: '/projectDash', icon: 'fas fa-project-diagram', label: 'Projects'},
    { link: '/columns', icon: 'fas fa-plus-circle', label: 'Columns' },
    { link: '/boards', icon: 'fas fa-calendar-alt', label: 'Kanban' }

  ];
}
