import { Injectable, InjectionToken, Inject } from '@angular/core';
import { Http, Response, RequestOptions, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Rx'
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

// MarvelAPI Config Object Interface and Injection Token
export interface MarvelAPIConfig {
  apiKey: string;
  baseUrl: string;
  limit: number;
}

export let MARVEL_API_CONFIG = new InjectionToken<MarvelAPIConfig>(
  'MarvelAPIConfig'
)

/*
  Generated class for the MarvelAPI provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class MarvelAPI {

  private _comicListUrl: string = "/v1/public/comics";

  constructor(
    private http: Http,
    @Inject(MARVEL_API_CONFIG) private marvelAPIConfig: MarvelAPIConfig,
  ) {
  }

  get comicListUrl() : string {
    return this.marvelAPIConfig.baseUrl + this._comicListUrl;
  }

  getDateRangePerYear(year: number) : string{
    let intYear = year | 0;
    return `${intYear}-01-01,${intYear}-12-31`;
  }

  getComicsSearchParams(comicSearchParams?: ComicSearchParams) : URLSearchParams {
    let urlSearchParams = new URLSearchParams();
    urlSearchParams.set('apiKey', this.marvelAPIConfig.apiKey);
    urlSearchParams.set('limit', String(this.marvelAPIConfig.limit));
    if(comicSearchParams){
      let year = comicSearchParams.year, title = comicSearchParams.title;
      if(year){
        urlSearchParams.set('dateRange', this.getDateRangePerYear(year));
      }
      if(title){
        urlSearchParams.set('title', title);
      }
    }
    return urlSearchParams;
  }

  getComics(offset?: number, search?: ComicSearchParams) : Observable<ComicDataWrapper> {
    return this.http.get(this.comicListUrl, this.getComicsSearchParams(search))
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server Error'));
  }

}

export interface ComicSearchParams {
  year?: number;
  title?: string;
}

export interface ComicDataWrapper {
  code: number;
  status: string;
  copyright: string;
  attributionText: string;
  attributionHTML: string;
  data: ComicDataContainer;
  etag: string;
}

export interface ComicDataContainer {
  offset: number;
  limit: number;
  total: number;
  count: number;
  results: Comic[];
}

export interface Comic {
  id: number;
  digitalId: number;
  title: string;
  issueNumber: number;
  variantDescription: string;
  description: string;
  modified: string;
  isbn: string;
  upc: string;
  diamondCode: string;
  ean: string;
  issn: string;
  format: string;
  pageCount: number;
  textObject: TextObject[];
  resourceURI: string;
  urls: Url[];
  series: SeriesSummary;
  variants: ComicSummary[];
  collections: ComicSummary[];
  collectedIssues: ComicSummary[];
  dates: ComicDate[];
  prices: ComicPrice[];
  thumbnail: Image[];
  images: Image[];
  creators: CreatorList;
  characters: CharacterList;
  stories: StoryList;
  EventList: EventList;
}

export interface TextObject {
  type: string;
  language: string;
  text: string;
}

export interface Url {
  type: string;
  url: string;
}

export interface SeriesSummary {
  resourceURI: string;
  name: string;
}

export interface ComicSummary {
  resourceURI: string;
  name: string;
}

export interface ComicDate {
  type: string;
  date: string;
}

export interface ComicPrice {
  type: string;
  price: number;
}

export interface Image {
  path: string;
  extension: string;
}

export interface CreatorList {
  available: number;
  returned: number;
  collectionURI: string;
  items: CreatorSummary[];
}

export interface CreatorSummary {
  resourceURI: string;
  name: string;
  role: string;
}

export interface CharacterList {
  available: number;
  returned: number;
  collectionURI: string;
  items: CharacterSummary[];
}

export interface CharacterSummary {
  resourceURI: string;
  name: string;
  role: string;
}

export interface StoryList {
  available: number;
  returned: number;
  collectionURI: string;
  items: StorySummary[];
}

export interface StorySummary {
  resourceURI: string;
  name: string;
  type: string;
}

export interface EventList {
  available: number;
  returned: number;
  collectionURI: string;
  items: StorySummary[];
}

export interface EventSummary {
  resourceURI: string;
  name: string;
}
