import { Component, EventEmitter, Input, OnChanges } from '@angular/core';
import { NgForm }    from '@angular/forms';
import { Observable } from 'rxjs/Rx';

import { TaskBoxComponent } from './task-box.componet';
import { TaskService } from '../service/task.service';
import { EmitterService } from '../../emitter.service';
import { Task } from '../model/task'

@Component({
  selector: 'task-form',
  template: '<form (ngSubmit)="submitTask()">' +
  '           <div class="form-group">' +
  '             <div class="input-group">' +
  '               <span class="input-group-addon" id="basic-addon1"><span class="glyphicon glyphicon-user"></span></span>' +
  '               <input type="text" class="form-control" placeholder="Title" [(ngModel)]="model.title" name="title">' +
  '             </div>' +
  '             <br />' +
  '             <textarea class="form-control" rows="3" placeholder="Text" [(ngModel)]="model.description" name="description"></textarea>' +
  '             <br />' +
  '             <button *ngIf="!editing" type="submit" class="btn btn-primary btn-block">Add</button>' +
  '           </div>' +
  '          </form>'
})
export class TaskFormComponent{
  constructor(
    private taskService: TaskService
  ){}

  private model = new Task('', '');
  private editing = false;
  @Input() listId: string;

  submitTask(){
    let taskOperation: Observable<Task[]>;

    if(!this.editing){
      // Create a new comment
      taskOperation = this.taskService.addTask(this.model)
    }

    taskOperation.subscribe(
      task => {
        EmitterService.get(this.listId).emit(task);
        this.model = new Task('', '');
      },
      err => { console.log(err); }
    );
  }

}
