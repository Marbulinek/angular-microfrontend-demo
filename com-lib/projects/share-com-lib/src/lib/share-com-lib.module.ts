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
