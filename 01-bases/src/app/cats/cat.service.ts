import { Injectable } from "@angular/core";

@Injectable()
export class CatService {
    cat: string = '';
    catSrc: string = '#';

    async returnUrl(message: string): Promise<any> {
        if ((message.length > 0) && (message.length < 10)) {
            console.log(message);
            return `https://cataas.com/cat/says/${message}`;
        } else {
            alert('Introducir un texto mayor a 0 menor a 10!');
            throw new Error('Cantidad de caracteres inválida');
        }
    }
    clear() {
        this.cat = '';
    }
}