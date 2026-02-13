import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project } from '../../core/models/project.model';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.html',
  standalone: true,
  imports: [CommonModule],
})
export class ProjectCardComponent {
  @Input({ required: true }) project!: Project;
}
