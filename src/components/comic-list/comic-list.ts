import { Component } from '@angular/core';
import {
  MarvelAPI
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

  constructor(public marvelAPI: MarvelAPI) {
    console.log('Hello ComicListComponent Component');
    this.text = 'Hello World';
  }

}
