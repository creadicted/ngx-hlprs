# Data-Request-Service

This is a tiny data service I use quite often and for easier reuse - decided to publish it. It acts as a helper method
to reduce the need of Injecting environment values in to multiple libraries.

### Installation

```typescript
NgxHlprDataRequestServiceModule.forRoot({
  backend: {
    baseUrl: environment.baseUrl,
    apiPath: environment.apiUrl,
  },
});
```

I usually then work with this like this:

```typescript
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

I can use this in multiple libraries and on build time the service takes the correct backend api. Depending on the configuration