import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../core/services/portfolio';
import { Project } from '../../core/models/project.model';
import { ProjectCardComponent } from '../../shared/project-card/project-card';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.html',
  standalone: true,
  imports: [CommonModule, ProjectCardComponent],
})
export class PortfolioComponent {
  projects: Project[] = [];

  constructor(private portfolio: PortfolioService) {
    this.projects = this.portfolio.getProjects();
  }
}
