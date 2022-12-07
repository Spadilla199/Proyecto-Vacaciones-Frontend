/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpContext } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { Cargo } from '../models/cargo';

@Injectable({
  providedIn: 'root',
})
export class EmpleadoCargoControllerService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation empleadoCargoControllerGetCargo
   */
  static readonly EmpleadoCargoControllerGetCargoPath = '/empleados/{id}/cargo';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getCargo()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCargo$Response(params: {
    id: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Array<Cargo>>> {

    const rb = new RequestBuilder(this.rootUrl, EmpleadoCargoControllerService.EmpleadoCargoControllerGetCargoPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<Cargo>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getCargo$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCargo(params: {
    id: string;
    context?: HttpContext
  }
): Observable<Array<Cargo>> {

    return this.getCargo$Response(params).pipe(
      map((r: StrictHttpResponse<Array<Cargo>>) => r.body as Array<Cargo>)
    );
  }

}
