import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComicListComponent } from './comic-list/comic-list';
import { ComicListItemComponent } from './comic-list-item/comic-list-item';
@NgModule({
    declarations: [ComicListComponent,
    ComicListItemComponent],
    imports: [CommonModule],
    exports: [ComicListComponent,
    ComicListItemComponent],
})
export class ComponentsModule {}
