import { Component } from '@angular/core';
import {Router, RouterLink, RouterLinkActive} from '@angular/router';
import {Subscription} from 'rxjs';
import {User, UserService} from '../user/user.service';
import {UserStateService} from '../user/user-state-service.service';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-menu',
  imports: [
    RouterLink,
    RouterLinkActive,
    NgForOf
  ],
  templateUrl: './menu.component.html',
  standalone: true,
  styleUrl: './menu.component.css'
})
export class MenuComponent {

  navItems = [
    { link: '/AllStats', icon: 'fas fa-chart-line', label: 'Global Dashboard' },
    { link: '/calender', icon: 'fas fa-calendar-alt', label: 'Calendar Overview' },
    { link: '/prediction', icon: 'fas fa-brain', label: 'AI Predictions' },
    { link: '/PMPDash', icon: 'fas fa-tasks', label: 'Project Management' },
    { link: '/WorkspaceDash', icon: 'fas fa-building', label: 'Workspace Insights' },
    { link: '/WorkflowDash', icon: 'fas fa-cogs', label: 'Workflow Analytics' },
    { link: '/StrategicDash', icon: 'fas fa-handshake', label: 'Strategic Partnerships' },
    { link: '/PerformanceManagement', icon: 'fas fa-chart-pie', label: 'Performance Management' },
    { link: '/collaborations', icon: 'fas fa-users-cog', label: 'Team Collaborations' }
  ];


}
