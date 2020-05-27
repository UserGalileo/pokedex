import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import { map, switchMap } from 'rxjs/operators';
import { PokemonService } from '../api/pokemon.service';

@Component({
  selector: 'app-detail',
  template: `
    <button mat-raised-button color="primary" [routerLink]="''">
      <mat-icon>navigate_before</mat-icon>
      Back
    </button>
    <mat-card class="card" *ngIf="detail$ | async as pkmn">
      <mat-card-header>
        <div mat-card-avatar class="card-header-image" [style.background-image]="'url(' + (pkmn.id | pkmnImage:'sprite') + ')'"></div>
        <mat-card-title>{{ pkmn.name.english }}</mat-card-title>
        <mat-card-subtitle>{{ pkmn.name.japanese }}</mat-card-subtitle>
      </mat-card-header>
      <div class="image-container">
        <img [src]="pkmn.id | pkmnImage" [alt]="pkmn.name.english">
      </div>
      <mat-card-content>
        <mat-list dense class="specs">
          <div mat-subheader>Specs</div>
          <mat-list-item>HP: <span class="spacer"></span>{{ pkmn.base['HP'] }}</mat-list-item>
          <mat-list-item>Attack: <span class="spacer"></span>{{ pkmn.base['Attack'] }}</mat-list-item>
          <mat-list-item>Defense: <span class="spacer"></span>{{ pkmn.base['Defense'] }}</mat-list-item>
          <mat-list-item>Sp. Attack: <span class="spacer"></span>{{ pkmn.base['Sp. Attack'] }}</mat-list-item>
          <mat-list-item>Sp. Defense: <span class="spacer"></span>{{ pkmn.base['Sp. Defense'] }}</mat-list-item>
          <mat-list-item>Speed: <span class="spacer"></span>{{ pkmn.base['Speed'] }}</mat-list-item>
        </mat-list>
      </mat-card-content>
    </mat-card>
  `,
  styles: [`
    .card {
        width: 400px;
        max-width: 80vw;
        margin: 10px auto;
        padding: 20px;
    }
    .card-header-image {
        background-size: cover;
    }
    .image-container {
        background: #f5f5f5;
        padding: 20px;
        border-radius: 8px;
    }
    .specs {
        padding-top: 20px;
    }
    .specs p {
        display: flex;
    }
    img {
        width: 100px;
        margin: 0 auto;
        display: block;
    }
    button {
        margin: 10px auto;
        display: block;
    }
  `]
})
export class DetailComponent implements OnInit, OnDestroy {

  id$ = this.route.paramMap.pipe(
    map(params => params.get('id'))
  );

  detail$ = this.id$.pipe(
    switchMap(id => this.pkmnService.get(id))
  );

  constructor(
    private pkmnService: PokemonService,
    private route: ActivatedRoute,
    private title: Title,
    private meta: Meta
  ) {}

  ngOnInit() {
    this.detail$.subscribe(pkmn => {
      this.title.setTitle(pkmn.name.english);
      this.meta.updateTag({ name: 'description', content: pkmn.name.english });
    });
  }

  ngOnDestroy() {
    this.meta.removeTag('description');
  }
}
