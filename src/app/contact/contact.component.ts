import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  email: string = 'mansuj.vishu.17@gmail.com';
  linkedin: string = 'https://www.linkedin.com/in/manjeet-vishwakarma-032a004a/';
  github: string = 'https://github.com/manjeetdev4370';

  constructor() {}
}
