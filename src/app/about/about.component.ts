import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  name: string = 'Manjeet Vishwakarma';
  role: string = 'Technical Lead';

  constructor() {}
}
