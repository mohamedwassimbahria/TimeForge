import { Component } from '@angular/core';
import {NgForOf} from "@angular/common";
import {RouterLink, RouterLinkActive} from "@angular/router";
interface NavItem {
  link: string;
  icon: string;
  label: string;
}
@Component({
  selector: 'app-reward-dash',
  imports: [
    NgForOf,
    RouterLinkActive,
    RouterLink
  ],
  templateUrl: './reward-dash.component.html',
  styleUrl: './reward-dash.component.css'
})
export class RewardDashComponent {



  navItems: NavItem[] = [
    { link: '/rewards', icon: 'fas fa-list', label: 'List' },
    { link: '/rewards/add', icon: 'fas fa-plus-circle', label: 'Add a Reward' },
    { link: '/prediction_reward', icon: 'fas fa-chart-bar', label: 'Rewards Prediction' },
  ];

}
