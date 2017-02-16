import { Component} from '@angular/core';
import { EmitterService } from '../../emitter.service';

@Component({
  selector: 'task-widget',
  template: '<div class="row"> ' +
  '           <task-form [listId]="listId"></task-form>' +
  '           <task-list [listId]="listId"></task-list>' +
  '          </div>'
})
export class TaskComponent{
  private listId = 'TASK_COMPONENT_LIST';
}
