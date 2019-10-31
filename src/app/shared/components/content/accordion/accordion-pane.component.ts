import {Component, Input, TemplateRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-saa-accordion-pane',
  templateUrl: 'accordion-pane.component.html',
  styleUrls: ['accordion-pane.component.css']
})

export class AccordionPaneComponent {
  @ViewChild(TemplateRef, {static: true}) template;
  @Input() title: string;
  @Input() active = false;
}
