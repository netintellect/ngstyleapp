import {AfterContentInit, Component, ContentChild, ElementRef} from '@angular/core';

@Component({
  selector: 'app-saa-message',
  templateUrl: 'message.component.html',
  styleUrls: ['message.component.css']
})

export class MessageComponent implements AfterContentInit {
  @ContentChild('messageContent', {static: true}) 'messageContent';
  themeClassNames;
  isLayout01 = false;

  constructor(private hostRef: ElementRef) {
  }

  ngAfterContentInit() {
    this.themeClassNames = this.hostRef.nativeElement.className.split(' ');
    if (this.themeClassNames.indexOf('layout--01') > -1) {
      this.isLayout01 = true;
    }
  }

}
