import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../api/pokemon.service';
import { BehaviorSubject } from 'rxjs';
import { Pokemon } from '../model/pokemon';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  template: `
    <mat-list>
      <div mat-subheader>Pkmn</div>
      <div class="content">
        <div class="viewport" *isServer>
          <mat-list-item *ngFor="let item of items$ | async" matRipple [routerLink]="'detail/' + item.id" class="item">
            <img mat-list-avatar [src]="item.id | pkmnImage:'sprite'">
            <div mat-line>{{ item.name.english }}</div>
            <div mat-line>
              <span *ngFor="let type of item.type">{{ type }} </span>
            </div>
          </mat-list-item>
        </div>
        <cdk-virtual-scroll-viewport itemSize="72" class="viewport" *isBrowser>
          <mat-list-item *cdkVirtualFor="let item of items$ | async" matRipple [routerLink]="'detail/' + item.id" class="item">
            <img mat-list-avatar [src]="item.id | pkmnImage:'sprite'">
<!--            <img class="secondary-image" [src]="item.id | pkmnImage">-->
            <div mat-line>{{ item.name.english }}</div>
            <div mat-line>
              <span *ngFor="let type of item.type">{{ type }} </span>
            </div>
          </mat-list-item>
        </cdk-virtual-scroll-viewport>
      </div>
    </mat-list>
  `,
  styles: [`
    .item {
        height: 72px !important;
        cursor: pointer;
    }
    .item:hover {
        background: rgba(0,0,0,.1);
    }
    .viewport {
        width: 100%;
        flex-grow: 1;
    }
    .content {
        display: flex;
        flex-direction: column;
        height: calc(100vh - 120px);
        min-height: 1000px;
    }
    .secondary-image {
        opacity: .5;
        height: 70%;
    }
  `]
})
export class HomeComponent implements OnInit {

  items$ = new BehaviorSubject<Pokemon[]>([]);

  constructor(
    private pkmnService: PokemonService,
    private title: Title
  ) {}

  ngOnInit() {
    this.title.setTitle('Pokedex');
    this.pkmnService.getAll().subscribe(v => this.items$.next(v));
  }
}
