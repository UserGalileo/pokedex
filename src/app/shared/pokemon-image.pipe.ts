import { Pipe, PipeTransform } from '@angular/core';
import { environment as env } from '../../environments/environment';

export type PokemonImageType = 'sprite' | 'image' | 'thumbnail';

@Pipe({
  name: 'pkmnImage'
})
export class PokemonImagePipe implements PipeTransform {

  transform(value: any, type: PokemonImageType = 'image'): any {
    const id = ('00' + value).slice(-3);

    switch (type) {
      case 'image':
        return `${env.api}/images/${id}.png`;
      case 'sprite':
        return `${env.api}/sprites/${id}MS.png`;
      case 'thumbnail':
        return `${env.api}/thumbnails/${id}.png`;
    }

    return `${env.api}/images/${id}.png`;
  }
}
