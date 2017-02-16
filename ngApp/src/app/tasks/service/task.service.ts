import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Task } from '../model/task';
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class TaskService{
  constructor(private http: Http) {}

  private tasksUrl = 'http://localhost:8000/api/tasks/';

  getTasks(): Observable<Task[]> {
    return this.http.get(this.tasksUrl)
      .map((res:Response) => res.json())
      .catch((err:any) => Observable.throw(err.json().error || 'Server error'));
  }

  addTask(body: Object): Observable<Task[]> {
    let bodyString = JSON.stringify(body);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.tasksUrl, body, options)
      .map((res: Response) => res.json())
      .catch((err: any) => Observable.throw(err.json().error || 'Server error'));
  }

  removeTask(id: String): Observable<Task[]>{
    return this.http.delete(`${this.tasksUrl}${id}/delete/`)
      .map((res: Response) => res.json())
      .catch((err: any) => Observable.throw(err.json().error || 'Server error'));
  }
}

