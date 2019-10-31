import {Component} from '@angular/core';

@Component({
  selector: 'app-saa-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})

export class AppComponent {

  pills = [
    {
      label: 'HTML'
    },
    {
      label: 'CSS'
    },
    {
      label: 'SASS'
    }
  ];

}
