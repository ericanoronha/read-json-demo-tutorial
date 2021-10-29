import { Component } from '@angular/core';
import * as sanriocharacters from '../assets/sanriocharacters.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Read JSON: demo tutorial';
  Characters: any = sanriocharacters;
}
