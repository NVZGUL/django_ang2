import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { TaskBoxComponent } from './components/task-box.componet';
import { TaskListComponent } from './components/task-list.component';
import { TaskFormComponent } from './components/task-form.component';
import { TaskComponent } from './components/index';

import { TaskService } from './service/task.service';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
  ],
  declarations: [
    TaskBoxComponent,
    TaskListComponent,
    TaskFormComponent,
    TaskComponent
  ],
  providers: [
    TaskService
  ],
  exports: [
    TaskBoxComponent,
    TaskListComponent,
    TaskFormComponent,
    TaskComponent
  ]
})
export class TaskModule{}
