/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { BlogEntryDTO } from '../models/blog-entry-dto';

/**
 * Blog Controller
 */
@Injectable({
  providedIn: 'root',
})
class BlogControllerService extends __BaseService {
  static readonly getBlogEntryByIdUsingGETPath = '/blog';
  static readonly createNewBlogEntryUsingPOSTPath = '/blog';
  static readonly addNewCommentToBlogEntryUsingPUTPath = '/blog';
  static readonly getAllBlogEntriesUsingGETPath = '/blog/all';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @param blogEntryId blogEntryId
   * @return OK
   */
  getBlogEntryByIdUsingGETResponse(blogEntryId: number): __Observable<__StrictHttpResponse<BlogEntryDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = blogEntryId;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/blog`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<BlogEntryDTO>;
      })
    );
  }
  /**
   * @param blogEntryId blogEntryId
   * @return OK
   */
  getBlogEntryByIdUsingGET(blogEntryId: number): __Observable<BlogEntryDTO> {
    return this.getBlogEntryByIdUsingGETResponse(blogEntryId).pipe(
      __map(_r => _r.body as BlogEntryDTO)
    );
  }

  /**
   * @param blogEntryDTO blogEntryDTO
   */
  createNewBlogEntryUsingPOSTResponse(blogEntryDTO: BlogEntryDTO): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = blogEntryDTO;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/blog`,
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
   * @param blogEntryDTO blogEntryDTO
   */
  createNewBlogEntryUsingPOST(blogEntryDTO: BlogEntryDTO): __Observable<null> {
    return this.createNewBlogEntryUsingPOSTResponse(blogEntryDTO).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param blogEntryId blogEntryId
   * @param blogEntry blogEntry
   */
  addNewCommentToBlogEntryUsingPUTResponse(blogEntryId: number,
    blogEntry: string): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = blogEntryId;
    __body = blogEntry;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/blog`,
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
   * @param blogEntryId blogEntryId
   * @param blogEntry blogEntry
   */
  addNewCommentToBlogEntryUsingPUT(blogEntryId: number,
    blogEntry: string): __Observable<null> {
    return this.addNewCommentToBlogEntryUsingPUTResponse(blogEntryId, blogEntry).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @return OK
   */
  getAllBlogEntriesUsingGETResponse(): __Observable<__StrictHttpResponse<Array<BlogEntryDTO>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/blog/all`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<BlogEntryDTO>>;
      })
    );
  }
  /**
   * @return OK
   */
  getAllBlogEntriesUsingGET(): __Observable<Array<BlogEntryDTO>> {
    return this.getAllBlogEntriesUsingGETResponse().pipe(
      __map(_r => _r.body as Array<BlogEntryDTO>)
    );
  }
}

module BlogControllerService {
}

export { BlogControllerService }
