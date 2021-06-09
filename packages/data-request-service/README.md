# Data-Request-Service

This is a tiny data service I use quite often and for easier reuse - decided to publish it. It acts as a helper method
to reduce the need of Injecting environment values in to multiple libraries.

### Installation

```shell
npm i @wenzl/data-request-service
```

```typescript
// environment.ts
export const environment = {
  production: false,
  backend: {
    baseUrl: 'http://localhost:5000',
    apiPath: 'api'
  }
};
```

```typescript
// app.module.ts
NgxHlprDataRequestServiceModule.forRoot({
  backend: {
    baseUrl: environment.backend.baseUrl,
    apiPath: environment.backend.apiPath
  },
});
```
### Usage

I usually then create for different services that require rest calls a service that used the `NgxHlprDataService`. Its code duplication but with bigger projects - I find it much easier to work with such an API:

```typescript
// document-rest.service.ts
@Injectable({
  providedIn: 'root',
})
export class DocumentRestService {
  path = 'documents';

  constructor(private _dataService: NgxHlprDataService) {}

  getAll(): Observable<IDocument[]> {
    return this._dataService.getAll<IDocument>(this.path);
  }

  get(id: string): Observable<IDocument> {
    return this._dataService.get<IDocument>(this.path, id);
  }
}
```

### What have I gained you might ask?

I can use this in multiple libraries and do not need to inject the environment in the individual modules. 
On build time the service takes the correct backend api. Depending on the configuration.
