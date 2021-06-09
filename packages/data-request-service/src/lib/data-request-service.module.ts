import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  NgxHlprDataServiceConfig,
  NgxHlprDataServiceConfigService,
} from './data-service.config';
import { NgxHlprDataService } from './data-request.service';

@NgModule({
  imports: [CommonModule],
})
export class NgxHlprDataRequestServiceModule {
  static forRoot(
    config: NgxHlprDataServiceConfig
  ): ModuleWithProviders<NgxHlprDataRequestServiceModule> {
    return {
      ngModule: NgxHlprDataRequestServiceModule,
      providers: [
        NgxHlprDataService,
        {
          provide: NgxHlprDataServiceConfigService,
          useValue: config,
        },
      ],
    };
  }
}
