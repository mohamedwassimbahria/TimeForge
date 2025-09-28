import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {NgForOf} from '@angular/common';

interface NavItem {
  link: string;
  icon: string;
  label: string;
}

@Component({
  selector: 'app-process-management',
  imports: [
    RouterLink,
    RouterLinkActive,
    NgForOf
  ],
  templateUrl: './process-management.component.html',
  standalone: true,
  styleUrl: './process-management.component.css'
})
export class ProcessManagementComponent {

  navItems: NavItem[] = [
    {link: '/WorkflowDash', icon: 'fas fa-bullseye', label: 'Workflow Dashboard'},
    {link: '/rewards', icon: 'fas fa-gift', label: 'Rewards'}
  ];
}
