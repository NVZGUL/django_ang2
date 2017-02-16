import { Component } from '@angular/core';
import { TaskComponent } from './tasks/components/index'

@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}}</h1>
             <task-widget></task-widget>`,
})
export class AppComponent  { name = 'Angular'; }
