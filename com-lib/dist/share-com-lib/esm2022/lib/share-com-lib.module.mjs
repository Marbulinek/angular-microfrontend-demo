import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareComLibComponent } from './share-com-lib.component';
import { ShareComLibService } from './share-com-lib.service';
import * as i0 from "@angular/core";
export class ShareComLibModule {
    static forRoot() {
        return {
            ngModule: ShareComLibModule,
            providers: [ShareComLibService]
        };
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.8", ngImport: i0, type: ShareComLibModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "17.0.8", ngImport: i0, type: ShareComLibModule, declarations: [ShareComLibComponent], imports: [CommonModule], exports: [ShareComLibComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "17.0.8", ngImport: i0, type: ShareComLibModule, imports: [CommonModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.8", ngImport: i0, type: ShareComLibModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [ShareComLibComponent],
                    imports: [
                        CommonModule
                    ],
                    exports: [ShareComLibComponent]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhcmUtY29tLWxpYi5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9zaGFyZS1jb20tbGliL3NyYy9saWIvc2hhcmUtY29tLWxpYi5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUF1QixRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ2pFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHlCQUF5QixDQUFDOztBQVM3RCxNQUFNLE9BQU8saUJBQWlCO0lBQzVCLE1BQU0sQ0FBQyxPQUFPO1FBQ1osT0FBTztZQUNMLFFBQVEsRUFBRSxpQkFBaUI7WUFDM0IsU0FBUyxFQUFFLENBQUMsa0JBQWtCLENBQUM7U0FDaEMsQ0FBQTtJQUNILENBQUM7OEdBTlUsaUJBQWlCOytHQUFqQixpQkFBaUIsaUJBTmIsb0JBQW9CLGFBRWpDLFlBQVksYUFFSixvQkFBb0I7K0dBRW5CLGlCQUFpQixZQUoxQixZQUFZOzsyRkFJSCxpQkFBaUI7a0JBUDdCLFFBQVE7bUJBQUM7b0JBQ1IsWUFBWSxFQUFFLENBQUMsb0JBQW9CLENBQUM7b0JBQ3BDLE9BQU8sRUFBRTt3QkFDUCxZQUFZO3FCQUNiO29CQUNELE9BQU8sRUFBRSxDQUFDLG9CQUFvQixDQUFDO2lCQUNoQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IFNoYXJlQ29tTGliQ29tcG9uZW50IH0gZnJvbSAnLi9zaGFyZS1jb20tbGliLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFNoYXJlQ29tTGliU2VydmljZSB9IGZyb20gJy4vc2hhcmUtY29tLWxpYi5zZXJ2aWNlJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbU2hhcmVDb21MaWJDb21wb25lbnRdLFxyXG4gIGltcG9ydHM6IFtcclxuICAgIENvbW1vbk1vZHVsZVxyXG4gIF0sXHJcbiAgZXhwb3J0czogW1NoYXJlQ29tTGliQ29tcG9uZW50XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2hhcmVDb21MaWJNb2R1bGUge1xyXG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnM8U2hhcmVDb21MaWJNb2R1bGU+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIG5nTW9kdWxlOiBTaGFyZUNvbUxpYk1vZHVsZSxcclxuICAgICAgcHJvdmlkZXJzOiBbU2hhcmVDb21MaWJTZXJ2aWNlXVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=