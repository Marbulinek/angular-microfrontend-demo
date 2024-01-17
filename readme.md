# Angular Module Federation
## Remote application
## create "remote" application
```
ng new remote --standalone false
cd remote
```

## add module federation library
```
ng add @angular-architects/module-federation@14.3.10 --project remote --port 4201 --type remote
```

## create new module and component
```
ng g module remoteMain
cd remote-main
ng g c home --standalone false
``` 

## Edit webpack config file with exposing modules
```typescript
/// webpack.config.js

const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  name: 'remote',

  exposes: {
    './RemoteMainModule': './src/app/remote-main/remote-main.module.ts',
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

});
```

```typescript
/// remote-main/app-routing.module.ts

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./remote-main/remote-main.module').then((m) => m.RemoteMainModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
```

```typescript
/// remote-main/remote-main.module.ts

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { Route, RouterModule } from '@angular/router';


export const remoteMainRoutes: Route[] = [
  {
    path: '',
    component: HomeComponent
  }
]

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(remoteMainRoutes)
  ]
})
export class RemoteMainModule { }
```

and try to run app:
```
npm run start
```

# Shell application

Install module federation
```
ng add @angular-architects/module-federation --project shell --port 4200 --type dynamic-host
```

change mf.manifest.json file
```json
/// assets/mf.manifest.json

{
	"remote": "http://localhost:4201/remoteEntry.js"
}
```

create home-shell component

```
ng g c home-shell --standalone false
```

```typescript
/// app-routing.module.ts

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeShellComponent } from './home-shell/home-shell.component';

const routes: Routes = [
  {
    path: '',
    component: HomeShellComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

```

We need to tell shell, where to find remote application
```typescript
/// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeShellComponent } from './home-shell/home-shell.component';
import { loadRemoteModule } from '@angular-architects/module-federation';

const routes: Routes = [
  {
    path: '',
    component: HomeShellComponent,
    pathMatch: 'full',
  },
  {
    path: 'remote',
    loadChildren: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: 'http://localhost:4201/remoteEntry.js',
        exposedModule: './RemoteMainModule',
      }).then((m) => m.RemoteMainModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
```

change navigation menu:
```html
<!-- app.component.html -->
<ul>
  <li><a routerLinkActive="active" routerLink="/">Domov</a></li>
  <li><a routerLink="/remote">Remote application</a></li>
</ul>

<router-outlet></router-outlet>
```


# Communication library
```
ng new com-lib --create-application=false
```

and create communication library

```
ng generate library share-com-lib --standalone false
```

into library service add classic observable behavior subject
```typescript
/// lib/share-com-lib.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShareComLibService {

  private nameSubject = new BehaviorSubject('');
  readonly name$ = this.nameSubject.asObservable();
  addName(name: string): void{
    this.nameSubject.next(name);
  }
}
```
create module in projects/share-com-lib/src/lib/
```
ng g module share-com-lib
```

```typescript
/// lib/share-com-lib.module.ts

import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareComLibComponent } from './share-com-lib.component';
import { ShareComLibService } from './share-com-lib.service';

@NgModule({
  declarations: [ShareComLibComponent],
  imports: [
    CommonModule
  ],
  exports: [ShareComLibComponent]
})
export class ShareComLibModule {
  static forRoot(): ModuleWithProviders<ShareComLibModule> {
    return {
      ngModule: ShareComLibModule,
      providers: [ShareComLibService]
    }
  }
}
```

build library
```
ng build
```


# Link module into shell
Npm link should be not more needed. It will be done automatically by npm install command.
```
npm link ..\com-lib\dist\share-com-lib
```

Update shell package.json
```json
"dependencies": {
    ...
    "share-com-lib": "0.0.1"
  }
```

Into app.module into imports add:
```typescript
imports: [
    ...
    ShareComLibModule.forRoot()
]
```

We are sending data over the microfrontends
```typescript
/// app/home-shell/home-shell.component.ts

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
    this.shareComLib.addName("Lukáš");
  }
}
```

```html
<!-- home-shell.component.html -->
<div>
    <h1>Shell wrapper</h1>
    <p>Toto je shell pre microfrontends, v nasom pripade pre remote app beziacu na porte 4201</p>

    <button (click)="sendData()">Odošli meno Lukáš do microfrontend remote aplikácie</button>
</div>

```


# Link ComLibrary into remote application
```
npm link ..\com-lib\dist\share-com-lib
```

Update shell package.json
```json
"dependencies": {
    ...
    "share-com-lib": "0.0.1"
  }
```

```typescript
/// home.component.ts

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
```
