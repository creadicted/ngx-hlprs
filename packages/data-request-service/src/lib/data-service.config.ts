import { InjectionToken } from '@angular/core';

export interface NgxHlprDataServiceConfig {
  backend: {
    baseUrl: string;
    apiPath: string;
  };
}

export const NgxHlprDataServiceConfigService = new InjectionToken<NgxHlprDataServiceConfig>(
  'NgxHlprDataServiceConfigService'
);
