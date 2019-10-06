/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { UserDTO } from '../models/user-dto';

/**
 * User Controller
 */
@Injectable({
  providedIn: 'root',
})
class UserControllerService extends __BaseService {
  static readonly getUserByIdUsingGETPath = '/user';
  static readonly registerUserUsingPOSTPath = '/user';
  static readonly deleteUserUsingDELETEPath = '/user';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @param userId userId
   * @return OK
   */
  getUserByIdUsingGETResponse(userId: number): __Observable<__StrictHttpResponse<UserDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = userId;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/user`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<UserDTO>;
      })
    );
  }
  /**
   * @param userId userId
   * @return OK
   */
  getUserByIdUsingGET(userId: number): __Observable<UserDTO> {
    return this.getUserByIdUsingGETResponse(userId).pipe(
      __map(_r => _r.body as UserDTO)
    );
  }

  /**
   * @param userDTO userDTO
   */
  registerUserUsingPOSTResponse(userDTO: UserDTO): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = userDTO;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/user`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * @param userDTO userDTO
   */
  registerUserUsingPOST(userDTO: UserDTO): __Observable<null> {
    return this.registerUserUsingPOSTResponse(userDTO).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param userId userId
   */
  deleteUserUsingDELETEResponse(userId: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = userId;
    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/user`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * @param userId userId
   */
  deleteUserUsingDELETE(userId: number): __Observable<null> {
    return this.deleteUserUsingDELETEResponse(userId).pipe(
      __map(_r => _r.body as null)
    );
  }
}

module UserControllerService {
}

export { UserControllerService }
