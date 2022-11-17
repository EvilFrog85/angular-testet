/**
 * The Cocktail DataBase
 * An open API to handle cocktail recepies. Drink thumbnails and images Add /preview to the end of the cocktail image URL. (100x100) Ingredients www.thecocktaildb.com/images/ingredients/gin-Small.png (100x100) www.thecocktaildb.com/images/ingredients/gin-Medium.png (350x350) www.thecocktaildb.com/images/ingredients/gin.png (700x700)
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *//* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent }                           from '@angular/common/http';
import { CustomHttpUrlEncodingCodec }                        from '../encoder';

import { Observable }                                        from 'rxjs';

import { CocktailResponse } from '../model/cocktailResponse';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class LookupService {

    protected basePath = 'www.thecocktaildb.com/api/json/v1/1';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();

    constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }

    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    private canConsumeForm(consumes: string[]): boolean {
        const form = 'multipart/form-data';
        for (const consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }


    /**
     * 
     * Lookup a cocktail or ingredient
     * @param i Cocktails by cocktail id
     * @param iid Ingredient by ingredient id
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public lookupPhpGet(i?: string, iid?: string, observe?: 'body', reportProgress?: boolean): Observable<CocktailResponse>;
    public lookupPhpGet(i?: string, iid?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<CocktailResponse>>;
    public lookupPhpGet(i?: string, iid?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<CocktailResponse>>;
    public lookupPhpGet(i?: string, iid?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {



        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (i !== undefined && i !== null) {
            queryParameters = queryParameters.set('i', <any>i);
        }
        if (iid !== undefined && iid !== null) {
            queryParameters = queryParameters.set('iid', <any>iid);
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.request<CocktailResponse>('get',`${this.basePath}/lookup.php`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}