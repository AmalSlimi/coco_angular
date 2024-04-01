import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { StatsService } from '../service/stats.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-role-stats',
  templateUrl: './role-stats.component.html',
  styleUrls: ['./role-stats.component.scss']
})
export class RoleStatsComponent implements OnInit, AfterViewInit {
  @ViewChild('roleChart') roleChart!: ElementRef<HTMLCanvasElement>;

  constructor(private statsService: StatsService) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.statsService.getUserRoleStatistics().subscribe(data => {
      const roleChart = new Chart(this.roleChart.nativeElement, {
        type: 'bar',
        data: {
          labels: data.map(item => item.roleName),
          datasets: [{
            label: 'Number of Users',
            data: data.map(item => item.count),
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)', // Red
              'rgba(255, 159, 64, 0.2)', // Orange
              'rgba(255, 205, 86, 0.2)', // Yellow
              'rgba(75, 192, 192, 0.2)', // Green
              'rgba(54, 162, 235, 0.2)', // Blue
              'rgba(153, 102, 255, 0.2)', // Purple
              'rgba(201, 203, 207, 0.2)'  // Grey
            ],
            borderColor: [
              'rgb(255, 99, 132)', // Red
              'rgb(255, 159, 64)', // Orange
              'rgb(255, 205, 86)', // Yellow
              'rgb(75, 192, 192)', // Green
              'rgb(54, 162, 235)', // Blue
              'rgb(153, 102, 255)', // Purple
              'rgb(201, 203, 207)'  // Grey
            ],
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
    });
  }
}
