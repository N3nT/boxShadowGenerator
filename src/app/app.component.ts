import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'boxShadowGenerator';
  horizontal:number = 0;
  vertical:number = 0;
  blur:number = 100;
  spread:number = 0;
  color:string = '#000000';
}
