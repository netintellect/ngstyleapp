import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-saa-pills',
  templateUrl: 'pills.component.html',
  styleUrls: ['pills.component.css']
})

export class PillsComponent {
    @Input() pills;
    selectedPill: string;

    togglePill(pill) {
        this.selectedPill = pill;
    }

}
