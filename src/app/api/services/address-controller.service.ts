/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { AddressDTO } from '../models/address-dto';

/**
 * Address Controller
 */
@Injectable({
  providedIn: 'root',
})
class AddressControllerService extends __BaseService {
  static readonly getAddressByUserIdUsingGETPath = '/address';
  static readonly registerAddressForUserIdUsingPOSTPath = '/address';
  static readonly updateUserAddressUsingPUTPath = '/address';

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
  getAddressByUserIdUsingGETResponse(userId: number): __Observable<__StrictHttpResponse<AddressDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = userId;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/address`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<AddressDTO>;
      })
    );
  }
  /**
   * @param userId userId
   * @return OK
   */
  getAddressByUserIdUsingGET(userId: number): __Observable<AddressDTO> {
    return this.getAddressByUserIdUsingGETResponse(userId).pipe(
      __map(_r => _r.body as AddressDTO)
    );
  }

  /**
   * @param userId userId
   * @param address address
   */
  registerAddressForUserIdUsingPOSTResponse(userId: number,
    address: AddressDTO): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = userId;
    __body = address;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/address`,
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
   * @param address address
   */
  registerAddressForUserIdUsingPOST(userId: number,
    address: AddressDTO): __Observable<null> {
    return this.registerAddressForUserIdUsingPOSTResponse(userId, address).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param userId userId
   * @param address address
   */
  updateUserAddressUsingPUTResponse(userId: number,
    address: AddressDTO): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = userId;
    __body = address;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/address`,
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
   * @param address address
   */
  updateUserAddressUsingPUT(userId: number,
    address: AddressDTO): __Observable<null> {
    return this.updateUserAddressUsingPUTResponse(userId, address).pipe(
      __map(_r => _r.body as null)
    );
  }
}

module AddressControllerService {
}

export { AddressControllerService }
