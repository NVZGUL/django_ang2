import { Component, Input, Output, EventEmitter  } from '@angular/core';
import { Task } from '../model/task';
import { EmitterService } from '../../emitter.service';
import { TaskService } from '../service/task.service';

@Component({
  selector: 'task-box',
  template: '<div class="panel panel-default">' +
  '             <div class="panel-heading">{{task.title}}</div>' +
  '             <div class="panel-body">' +
  '               {{task.description}} ' +
  '             </div>' +
  '             <div class="panel-footer">' +
  '               <button class="btn btn-danger" (click)="deleteTask(task.id)"><span class="glyphicon glyphicon-remove"></span></button>' +
  '             </div>' +
  '           </div>'
})
export class TaskBoxComponent{
  constructor(
    private taskService: TaskService
  ){}
  @Input() task: Task;
  @Input() listId: string;

  deleteTask(id: string){
    this.taskService.removeTask(id).subscribe(
      task => { EmitterService.get(this.listId).emit(task); },
      err => { console.log(err) }
    )
  }
}
