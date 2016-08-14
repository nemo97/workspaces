import { Routes,RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './pagenotfound.component';

const appRoutes: Routes = [
   { path: '', redirectTo:'/book-center',terminal:true},
   { path: '**', component: PageNotFoundComponent }
];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(appRoutes);