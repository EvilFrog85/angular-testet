import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{ 
		path: 'cocktails', loadChildren: () => import('./cocktails/cocktails.module').then(m => m.CocktailsModule) 
	},
	{ 
		path: 'users', loadChildren: () => import('./users/users.module').then(m => m.UsersModule)
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
