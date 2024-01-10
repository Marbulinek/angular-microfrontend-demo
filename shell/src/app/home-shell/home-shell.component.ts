import { Component } from '@angular/core';
import { ShareComLibService } from 'share-com-lib';

@Component({
  selector: 'app-home-shell',
  templateUrl: './home-shell.component.html',
  styleUrl: './home-shell.component.css'
})
export class HomeShellComponent {
  constructor(private shareComLib: ShareComLibService){
  }

  sendData(): void{
    this.shareComLib.addName("Lukas");
  }
}
