import {
  Component,
  OnInit,
  OnDestroy,
  AfterViewInit
} from '@angular/core';
import { GoalService } from '../goal/goal.service';
import { ProjectService } from '../project/project.service';
import { WorkflowService } from '../workflow/workflow.service';
import { PartnershipService } from '../strategicparternship/strategicparternship.service';
import { Chart, registerables } from 'chart.js';
import { forkJoin, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { NgForOf, NgIf } from '@angular/common';

Chart.register(...registerables);

interface DashboardTab {
  id: string;
  label: string;
}

@Component({
  selector: 'app-all-stats',
  templateUrl: './all-stats.component.html',
  styleUrls: ['./all-stats.component.scss'],
  standalone: true,
  imports: [NgForOf, NgIf]
})
export class AllStatsComponent implements OnInit, AfterViewInit, OnDestroy {
  stats: any = {};
  loading = true;
  error = false;
  activeTab = 'goals';
  private destroy$ = new Subject<void>();

  tabs: DashboardTab[] = [
    { id: 'goals', label: 'Goals' },
    { id: 'projects', label: 'Projects' },
    { id: 'workflows', label: 'Workflows' },
    { id: 'partnerships', label: 'Partnerships' }
  ];

  constructor(
    private goalService: GoalService,
    private projectService: ProjectService,
    private workflowService: WorkflowService,
    private partnershipService: PartnershipService
  ) {}

  ngOnInit(): void {
    this.loadDashboardData();
  }

  ngAfterViewInit(): void {
    // Initialiser après la vue
    this.initAllCharts();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
    this.destroyCharts();
  }

  setActiveTab(tabId: string): void {
    this.activeTab = tabId;
    setTimeout(() => {
      switch (tabId) {
        case 'goals': this.initGoalCharts(); break;
        case 'projects': this.initProjectCharts(); break;
        case 'workflows': this.initWorkflowCharts(); break;
        case 'partnerships': this.initPartnershipCharts(); break;
      }
    }, 0);
  }

  private loadDashboardData(): void {
    this.loading = true;
    this.error = false;

    forkJoin([
      this.goalService.getDashboardStats(),
      this.projectService.getProjectDashboardStats(),
      this.workflowService.getDashboardStats(),
      this.partnershipService.getDashboardStats()
    ])
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: ([goalStats, projectStats, workflowStats, partnershipStats]) => {
          this.stats = {
            ...goalStats,
            ...projectStats,
            ...workflowStats,
            ...partnershipStats
          };
          this.loading = false;
          this.initAllCharts();
        },
        error: (err) => {
          console.error('Failed to load dashboard data:', err);
          this.error = true;
          this.loading = false;
        }
      });
  }

  private initAllCharts(): void {
    this.initGoalCharts();
    this.initProjectCharts();
    this.initWorkflowCharts();
    this.initPartnershipCharts();
  }

  private destroyCharts(): void {
    Object.values(Chart.instances || {}).forEach(instance => instance.destroy());
  }

  private initGoalCharts(): void {
    if (!this.stats?.goalsPerMonth) return;

    this.createBarChart(
      'goalsPerMonthChart',
      'Goals per Month',
      Object.keys(this.stats.goalsPerMonth),
      Object.values(this.stats.goalsPerMonth),
      ['#4361ee', '#3f37c9', '#4895ef']
    );

    this.createLineChart(
      'avgCategoriesPerMonthChart',
      'Average Categories per Month',
      Object.keys(this.stats.avgCategoriesPerMonth || {}),
      Object.values(this.stats.avgCategoriesPerMonth || {}),
      '#4cc9f0'
    );

    this.createPieChart(
      'goalsBySizeChart',
      'Goals by Size',
      Object.keys(this.stats.goalsBySize || {}),
      Object.values(this.stats.goalsBySize || {}),
      ['#4361ee', '#3f37c9', '#4895ef', '#4cc9f0', '#560bad']
    );
  }

  private initProjectCharts(): void {
    if (!this.stats) return;

    this.createBarChart(
      'projectsPerMonthChart',
      'Projects per Month',
      Object.keys(this.stats.projectsPerMonth || {}),
      Object.values(this.stats.projectsPerMonth || {}),
      ['#7209b7', '#560bad', '#480ca8']
    );

    this.createLineChart(
      'averageMembersPerMonthChart',
      'Average Members per Month',
      Object.keys(this.stats.averageMembersPerMonth || {}),
      Object.values(this.stats.averageMembersPerMonth || {}),
      '#7209b7'
    );

    this.createPieChart(
      'projectsBySizeChart',
      'Projects by Size',
      Object.keys(this.stats.projectsBySize || {}),
      Object.values(this.stats.projectsBySize || {}),
      ['#7209b7', '#560bad', '#480ca8', '#3a0ca3', '#f72585']
    );
  }

  private initWorkflowCharts(): void {
    if (!this.stats) return;

    this.createBarChart(
      'workflowsPerMonthChart',
      'Workflows per Month',
      Object.keys(this.stats.workflowsPerMonth || {}),
      Object.values(this.stats.workflowsPerMonth || {}),
      ['#f72585', '#b5179e', '#7209b7']
    );

    this.createLineChart(
      'averageStepsPerMonthChart',
      'Average Steps per Month',
      Object.keys(this.stats.averageStepsPerMonth || {}),
      Object.values(this.stats.averageStepsPerMonth || {}),
      '#f72585'
    );

    this.createPieChart(
      'workflowsBySizeChart',
      'Workflows by Size',
      Object.keys(this.stats.workflowsBySize || {}),
      Object.values(this.stats.workflowsBySize || {}),
      ['#f72585', '#b5179e', '#7209b7', '#560bad', '#480ca8']
    );
  }

  private initPartnershipCharts(): void {
    if (!this.stats) return;

    this.createBarChart(
      'partnershipsPerMonthChart',
      'Partnerships per Month',
      Object.keys(this.stats.partnershipsPerMonth || {}),
      Object.values(this.stats.partnershipsPerMonth || {}),
      ['#4cc9f0', '#4895ef', '#4361ee']
    );

    this.createLineChart(
      'participantsPerMonthChart',
      'Participants per Month',
      Object.keys(this.stats.avgParticipantsPerMonth || {}),
      Object.values(this.stats.avgParticipantsPerMonth || {}),
      '#4895ef'
    );

    this.createPieChart(
      'partnershipsBySizeChart',
      'Partnerships by Size',
      Object.keys(this.stats.partnershipsBySize || {}),
      Object.values(this.stats.partnershipsBySize || {}),
      ['#4cc9f0', '#4895ef', '#4361ee', '#3f37c9', '#3a0ca3']
    );
  }

  private createBarChart(id: string, label: string, labels: string[], data: any[], colors: string[]): void {
    const canvas = document.getElementById(id) as HTMLCanvasElement;
    if (!canvas) return;

    new Chart(canvas.getContext('2d')!, {
      type: 'bar',
      data: {
        labels,
        datasets: [{
          label,
          data,
          backgroundColor: colors,
          borderColor: colors.map(c => `${c}cc`),
          borderWidth: 1,
          borderRadius: 4
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: { display: false },
          tooltip: {
            backgroundColor: '#2b2d42',
            titleColor: '#fff',
            bodyColor: '#fff',
            padding: 12,
            cornerRadius: 4
          }
        },
        scales: {
          y: {
            beginAtZero: true,
            grid: { color: 'rgba(0,0,0,0.05)' }
          },
          x: {
            grid: { display: false }
          }
        }
      }
    });
  }

  private createLineChart(id: string, label: string, labels: string[], data: any[], color: string): void {
    const canvas = document.getElementById(id) as HTMLCanvasElement;
    if (!canvas) return;

    new Chart(canvas.getContext('2d')!, {
      type: 'line',
      data: {
        labels,
        datasets: [{
          label,
          data,
          borderColor: color,
          backgroundColor: `${color}20`,
          borderWidth: 3,
          tension: 0.3,
          fill: true,
          pointBackgroundColor: color,
          pointRadius: 5,
          pointHoverRadius: 7
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: { display: false },
          tooltip: {
            backgroundColor: '#2b2d42',
            titleColor: '#fff',
            bodyColor: '#fff',
            padding: 12,
            cornerRadius: 4
          }
        },
        scales: {
          y: {
            beginAtZero: true,
            grid: { color: 'rgba(0,0,0,0.05)' }
          },
          x: {
            grid: { display: false }
          }
        }
      }
    });
  }

  private createPieChart(id: string, label: string, labels: string[], data: any[], colors: string[]): void {
    const canvas = document.getElementById(id) as HTMLCanvasElement;
    if (!canvas) return;

    new Chart(canvas.getContext('2d')!, {
      type: 'pie',
      data: {
        labels,
        datasets: [{
          label,
          data,
          backgroundColor: colors,
          borderColor: '#fff',
          borderWidth: 2
        }]
      },
      options: {
        responsive: true,
        plugins: {
          tooltip: {
            backgroundColor: '#2b2d42',
            titleColor: '#fff',
            bodyColor: '#fff',
            padding: 12,
            cornerRadius: 4
          }
        }
      }
    });
  }
}
