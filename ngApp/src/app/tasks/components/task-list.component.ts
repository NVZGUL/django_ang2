import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Task } from '../model/task';
import { TaskService } from '../service/task.service';
import { EmitterService } from '../../emitter.service';

@Component({
  selector: 'task-list',
  template: '<task-box [listId]="listId" *ngFor="let task of tasks" [task]="task"></task-box>'
})
export class TaskListComponent implements OnInit, OnChanges{
  tasks: Task[];
  @Input() listId: string;

  constructor(
    private taskService: TaskService
  ){}

  ngOnInit(){
      this.loadTasks()
  }

  loadTasks(){
    this.taskService.getTasks()
      .subscribe(
        tasks => { this.tasks = tasks },
        err => { console.log(err) }
      )
  }

  ngOnChanges(changes:any) {
    // Listen to the 'list'emitted event so as populate the model
    // with the event payload
    EmitterService.get(this.listId).subscribe((task: Task[]) => { this.loadTasks()});
  }
}
