import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CocktailsRoutingModule } from './cocktails-routing.module';
import { CocktailsComponent } from './cocktails.component';
import { SharedModule } from '../shared.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CocktailsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    CocktailsRoutingModule
  ]
})
export class CocktailsModule { }
