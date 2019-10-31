import {Component, ContentChildren, QueryList, AfterContentInit} from '@angular/core';
import {TabsPaneComponent} from './tabs-pane.component';

@Component({
  selector: 'app-saa-tabs',
  templateUrl: 'tabs.component.html',
  styleUrls: ['tabs.component.css']
})

export class TabsComponent implements AfterContentInit {
  @ContentChildren(TabsPaneComponent) tabs: QueryList<TabsPaneComponent>;

  ngAfterContentInit() {
    const activeTabs = this.tabs.filter((tab) => tab.active);
    if (activeTabs.length === 0) {
      this.selectTab(this.tabs.first);
    }
  }

  selectTab(tab: TabsPaneComponent) {
    this.tabs.toArray().forEach(t => t.active = false);
    tab.active = true;
  }

}
