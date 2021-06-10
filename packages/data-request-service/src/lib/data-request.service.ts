import { HttpClient, HttpParams } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  NgxHlprDataServiceConfig,
  NgxHlprDataServiceConfigService,
} from './data-service.config';

@Injectable({
  providedIn: 'root',
})
export class NgxHlprDataService {
  public apiUrl: string;

  constructor(
    @Inject(NgxHlprDataServiceConfigService)
    private _config: NgxHlprDataServiceConfig,
    private http: HttpClient
  ) {
    this.apiUrl = `${_config.backend.baseUrl}/${_config.backend.apiPath}`;
  }

  call<T>(path: string): Observable<T> {
    return this.http.get<T>(`${this.apiUrl}/${path}`);
  }

  delete<T>(path: string, id: string | number): Observable<T> {
    return this.http.delete<T>(`${this.apiUrl}/${path}/${id}`);
  }

  add<T>(path: string, item: T): Observable<T> {
    return this.http.post<T>(`${this.apiUrl}/${path}`, item);
  }

  put<T>(path: string, item: T): Observable<T> {
    return this.http.put<T>(`${this.apiUrl}/${path}`, item);
  }

  addBulk<T>(path: string, items: T[]): Observable<void> {
    return this.http.post<void>(`${this.apiUrl}/${path}/bulk`, items);
  }

  get<T>(path: string, id: string | number): Observable<T> {
    return this.http.get<T>(`${this.apiUrl}/${path}/${id}`);
  }

  getAll<T>(path: string): Observable<T[]> {
    return this.http.get<T[]>(`${this.apiUrl}/${path}`);
  }

  getAllFiltered<T>(
    path: string,
    params?:
      | HttpParams
      | {
          [param: string]: string | string[];
        }
  ): Observable<T> {
    return this.http.get<T>(`${this.apiUrl}/${path}`, { params });
  }
}
