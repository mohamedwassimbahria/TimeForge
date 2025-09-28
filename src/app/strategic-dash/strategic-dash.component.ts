import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {NgForOf} from '@angular/common';

interface NavItem {
  link: string;
  icon: string;
  label: string;
}
@Component({
  selector: 'app-strategic-dash',
  imports: [
    RouterLink,
    RouterLinkActive,
    NgForOf
  ],
  templateUrl: './strategic-dash.component.html',
  standalone: true,
  styleUrl: './strategic-dash.component.css'
})
export class StrategicDashComponent {
  navItems: NavItem[] = [
    { link: '/partnerships', icon: 'fas fa-list', label: 'List' },
    { link: '/add-partnership', icon: 'fas fa-plus-circle', label: 'Add a Partnership' },
    // { link: '/goals/edit/:id', icon: 'fas fa-edit', label: 'Edit a Goal' }, <-- Suppressed
    { link: '/partnerships/calendar', icon: 'fas fa-calendar-alt', label: 'Partnerships Calendar' },
    { link: '/partnerships/stats', icon: 'fas fa-chart-bar', label: 'Partnerships Stats' }
  ];

}
