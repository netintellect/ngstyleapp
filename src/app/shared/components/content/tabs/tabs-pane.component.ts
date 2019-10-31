import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-saa-tabs-pane',
  templateUrl: 'tabs-pane.component.html',
  styleUrls: ['tabs-pane.component.css']
})
export class TabsPaneComponent {
  @Input() title: string;
  @Input() active = false;
}
