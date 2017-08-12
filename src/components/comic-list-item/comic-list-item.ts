import { Component, Input } from '@angular/core';
import { Comic } from '../../providers/comic/comic';



/**
 * Generated class for the ComicListItemComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'comic-list-item',
  templateUrl: 'comic-list-item.html'
})
export class ComicListItemComponent {

  @Input() comic: Comic;

}
