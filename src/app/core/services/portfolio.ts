import { Injectable } from '@angular/core';
import { Project } from '../models/project.model';

@Injectable({ providedIn: 'root' })
export class PortfolioService {
  private readonly projects: Project[] = [
    {
      id: 'posttid',
      title: 'Posttid',
      description: 'Plataforma web tipo social (proyecto personal).',
      imageUrl: 'assets/projects/posttid.png',
      tags: ['HTML', 'CSS', 'JavaScript'],
      liveUrl: 'https://manzano.lovestoblog.com',
      createdAt: '2026-02-01',
    },
    {
      id: 'bmag',
      title: 'BMAG Finance',
      description: 'Mejoras y adaptación de web financiera.',
      imageUrl: 'assets/projects/bmag.png',
      tags: ['Front-end', 'Web'],
      createdAt: '2026-01-10',
    }
  ];

  getProjects(): Project[] {
    return this.projects;
  }
}
