import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {NgForOf} from '@angular/common';

interface NavItem {
  link: string;
  icon: string;
  label: string;
}
@Component({
  selector: 'app-projects-dash',
  imports: [
    RouterLink,
    RouterLinkActive,
    NgForOf
  ],
  templateUrl: './projects-dash.component.html',
  standalone: true,
  styleUrl: './projects-dash.component.css'
})


export class ProjectsDashComponent {

  navItems: NavItem[] = [
    { link: '/projects', icon: 'fas fa-list', label: 'List' },
    { link: '/projects/add', icon: 'fas fa-plus-circle', label: 'Add a Project' },
    { link: '/projects/estimate', icon: 'fas fa-lightbulb', label: 'Estimation' },
    { link: '/estimates', icon: 'fas fa-robot', label: 'Smart Task Estimation' },
    { link: '/projects/calendar', icon: 'fas fa-calendar-alt', label: 'Projects Calendar' },
    { link: '/projects/stats', icon: 'fas fa-chart-bar', label: 'Projects Stats' }
  ];

}
