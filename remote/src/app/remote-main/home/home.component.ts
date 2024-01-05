import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ShareComLibService } from 'share-com-lib';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  name$: Observable<string>;

  constructor(private shareComLib: ShareComLibService){
    this.name$ = this.shareComLib.name$;
  }
}
