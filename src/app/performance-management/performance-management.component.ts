import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {NgForOf} from '@angular/common';
interface NavItem {
  link: string;
  icon: string;
  label: string;
}
@Component({
  selector: 'app-performance-management',
  imports: [
    RouterLink,
    RouterLinkActive,
    NgForOf
  ],
  templateUrl: './performance-management.component.html',
  standalone: true,
  styleUrl: './performance-management.component.css'
})
export class PerformanceManagementComponent {

  navItems: NavItem[] = [
    {link: '/goalDash', icon: 'fas fa-bullseye', label: 'Goals'},
    {link: '/RewardDash', icon: 'fas fa-gift', label: 'Rewards'}
  ];

}
