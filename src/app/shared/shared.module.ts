import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonImagePipe } from './pokemon-image.pipe';

@NgModule({
  imports: [ CommonModule ],
  declarations: [ PokemonImagePipe ],
  exports: [ PokemonImagePipe ]
})
export class SharedModule {}
