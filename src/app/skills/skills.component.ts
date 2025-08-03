import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  skills: string[] = [
    'Angular', 'React', 'Vue',
    'Node.js', 'Express', 'NestJS',
    'AWS', 'Azure', 'Docker', 'Kubernetes',
    'GraphQL', 'REST APIs', 'CI/CD'
  ];

  constructor() {}
}
