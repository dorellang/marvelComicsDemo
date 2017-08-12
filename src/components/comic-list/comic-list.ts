import { Component } from '@angular/core';
import {
  MarvelAPI, ComicDataWrapper, Comic
} from '../../providers/comic/comic';

/**
 * Generated class for the ComicListComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'comic-list',
  templateUrl: 'comic-list.html'
})
export class ComicListComponent {

  text: string;
  attributionText: string;
  comics: Comic[];

  ngOnInit() {
    this.marvelAPI.getComics().subscribe(
      (comicDataWrapper) => this.onComicData(comicDataWrapper)
    );
  }

  onComicData(comicDataWrapper : ComicDataWrapper){
    this.attributionText = comicDataWrapper.attributionText;
    this.comics = comicDataWrapper.data.results;
  }

  getNextPage(){
  }

  constructor(public marvelAPI: MarvelAPI) {
  }

}
