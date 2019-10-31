import {Component, ContentChildren, QueryList, AfterContentInit} from '@angular/core';
import {AccordionPaneComponent} from './accordion-pane.component';

@Component({
  selector: 'app-saa-accordion',
  templateUrl: 'accordion.component.html',
  styleUrls: ['accordion.component.css']
})

export class AccordionComponent implements AfterContentInit {
  @ContentChildren(AccordionPaneComponent) items: QueryList<AccordionPaneComponent>;

  ngAfterContentInit() {
    const activeItems = this.items.filter((item) => item.active);
  }

  selectItem(item: AccordionPaneComponent) {
    if (!item.active) {
      item.active = true;
    } else {
      item.active = false;
    }
  }

}
