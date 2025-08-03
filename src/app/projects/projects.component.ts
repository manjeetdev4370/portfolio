import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  projects = [
    {
      name: 'Enterprise Dashboard',
      description: 'A real-time analytics dashboard used by Fortune 500 clients.'
    },
    {
      name: 'DevOps CI/CD Platform',
      description: 'A container-based CI/CD automation platform.'
    }
  ];

  constructor() {}
}
