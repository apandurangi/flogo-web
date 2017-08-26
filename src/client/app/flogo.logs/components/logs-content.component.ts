import {Component, ElementRef, Renderer, Input, Output, EventEmitter} from '@angular/core';
import {LogService} from '../log.service';

import 'rxjs/add/operator/map';

@Component(
  {
    selector: 'flogo-logs-content',
    // moduleId: module.id,
    templateUrl: 'logs-content.tpl.html',
    styleUrls: ['logs-content.component.less']
  }
)
export class FlogoLogsContentComponent {
  @Output() onWindowAction: EventEmitter<string>;
  @Input() isExternal = false;
  messages: string[];
  searchValue = '';

  constructor(public logService: LogService) {
    this.onWindowAction = new EventEmitter();
  }

  close() {
    this.onWindowAction.emit('close');
  }

  back() {
  }

  maximize() {
    this.onWindowAction.emit('maximize');
  }

  public onKeyUp(event) {
    this.searchValue = event.target.value;
  }

  public isError(item) {
    const message = item.message || '';
    return (message.indexOf('▶ ERROR') !== -1 || message.indexOf('▶ WARNI') !== -1);
  }

}
