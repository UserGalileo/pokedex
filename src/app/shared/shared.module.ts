import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonImagePipe } from './pokemon-image.pipe';
import { IsBrowserDirective } from './is-browser.directive';
import { IsServerDirective } from './is-server.directive';

@NgModule({
  imports: [ CommonModule ],
  declarations: [
    PokemonImagePipe,
    IsBrowserDirective,
    IsServerDirective
  ],
  exports: [
    PokemonImagePipe,
    IsBrowserDirective,
    IsServerDirective
  ]
})
export class SharedModule {}
