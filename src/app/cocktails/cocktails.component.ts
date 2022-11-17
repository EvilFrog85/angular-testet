import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/internal/operators/take';
import { Cocktail, SearchService } from '../services/cocktailAPI';
import { StoreService } from '../services/store.service';

@Component({
  selector: 'app-cocktails',
  templateUrl: './cocktails.component.html',
  styleUrls: ['./cocktails.component.scss']
})
export class CocktailsComponent implements OnInit {

  drinkList: Cocktail[] = [];
  isWaiting: boolean = false;
  minStrang: string = '';

  dates: string[] = ['2012-01-01T14:35:00Z', '2013-03-03T14:35:00Z', '2015-01-07T12:35:00Z', '2012-01-02T04:35:00Z'];

  constructor(
    public store: StoreService,
    private cocktailSearch: SearchService,
  ) { }

  ngOnInit(): void {
    this.store.setIsOk( !this.store.getIsOk() );

    this.isWaiting = true;

    this.cocktailSearch.searchPhpGet('margarita', undefined, undefined).pipe(take(1)).subscribe( {
      next: (res) => {
        this.drinkList = res.drinks!;
        console.log( res );
        this.isWaiting = false;
    },
    error: (err) => {
        console.log( err );
        this.isWaiting = false;
    }
    });

  }

  doSomething() {
    console.log(this.minStrang);
  }

}
