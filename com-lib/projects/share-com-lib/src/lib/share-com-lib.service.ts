import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ShareComLibService {
  private nameSubject = new BehaviorSubject('');
  readonly name$ = this.nameSubject.asObservable();
  addName(name: string): void {
    this.nameSubject.next(name);
  }
}
