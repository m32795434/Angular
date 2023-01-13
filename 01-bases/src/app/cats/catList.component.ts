import { Component, Input, SimpleChange, SimpleChanges } from "@angular/core";
import { CatService } from './cat.service';

@Component({
    selector: 'app-catList',
    templateUrl: './catList.Component.html',
    styles: ['img {max-width:500px;}']
})
export class CatListComponent {
    @Input() toSayInput?: string;
    catSrc: string | undefined = '';
    constructor(private catService: CatService) { }

    ngOnChanges(changes: SimpleChanges) {
        // Es importante google y consultar la docmumentación
        // https://angular.io/api/core/OnChanges
        console.log(changes);
        if (!(changes['toSayInput'].isFirstChange())) {
            this.getCat(changes['toSayInput'].currentValue);
        }

    }
    async getCat(message: string) {
        try {
            const response = await this.catService.returnUrl(message);
            console.log(response);
            this.catSrc = response;
        }
        catch (err) {
            console.error(err)
        }
    }
}