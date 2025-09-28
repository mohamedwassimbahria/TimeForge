import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {NgForOf} from '@angular/common';

interface NavItem {
  link: string;
  icon: string;
  label: string;
}

@Component({
  selector: 'app-workspace-dash',
  imports: [
    RouterLink,
    RouterLinkActive,
    NgForOf
  ],
  templateUrl: './workspace-dash.component.html',
  standalone: true,
  styleUrl: './workspace-dash.component.css'
})
export class WorkspaceDashComponent {

  navItems: NavItem[] = [
    { link: '/workspaces', icon: 'fas fa-th-large', label: 'All Workspaces' },
    { link: '/workspaces/add', icon: 'fas fa-plus-circle', label: 'Create Workspace' }
  ];

}
