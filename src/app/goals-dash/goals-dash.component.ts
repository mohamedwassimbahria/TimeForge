import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NgForOf } from '@angular/common';

interface NavItem {
  link: string;
  icon: string;
  label: string;
}

@Component({
  selector: 'app-goals-dash',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, NgForOf],
  templateUrl: './goals-dash.component.html',
  styleUrl: './goals-dash.component.css'
})
export class GoalsDashComponent {

  navItems: NavItem[] = [
    { link: '/goals', icon: 'fas fa-list', label: 'List' },
    { link: '/goals/add', icon: 'fas fa-plus-circle', label: 'Add a Goal' },
    // { link: '/goals/edit/:id', icon: 'fas fa-edit', label: 'Edit a Goal' }, <-- Suppressed
    { link: '/goals/calendar', icon: 'fas fa-calendar-alt', label: 'Goals Calendar' },
    { link: '/goals/stats', icon: 'fas fa-chart-bar', label: 'Goals Stats' }
  ];

}
