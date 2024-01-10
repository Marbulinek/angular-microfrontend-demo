import * as i0 from '@angular/core';
import { Injectable, NgModule } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CommonModule } from '@angular/common';

class ShareComLibService {
    constructor() {
        this.nameSubject = new BehaviorSubject('');
        this.name$ = this.nameSubject.asObservable();
    }
    addName(name) {
        this.nameSubject.next(name);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.8", ngImport: i0, type: ShareComLibService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.0.8", ngImport: i0, type: ShareComLibService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.8", ngImport: i0, type: ShareComLibService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }] });

class ShareComLibModule {
    static forRoot() {
        return {
            ngModule: ShareComLibModule,
            providers: [ShareComLibService]
        };
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.8", ngImport: i0, type: ShareComLibModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "17.0.8", ngImport: i0, type: ShareComLibModule, imports: [CommonModule] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "17.0.8", ngImport: i0, type: ShareComLibModule, imports: [CommonModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.8", ngImport: i0, type: ShareComLibModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [],
                    imports: [
                        CommonModule
                    ],
                    exports: []
                }]
        }] });

/*
 * Public API Surface of share-com-lib
 */

/**
 * Generated bundle index. Do not edit.
 */

export { ShareComLibModule, ShareComLibService };
//# sourceMappingURL=share-com-lib.mjs.map
