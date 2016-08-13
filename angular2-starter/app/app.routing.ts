import { Routes,RouterModule } from '@angular/router';
import { BookListComponent } from './book-list.component';
import { PageNotFoundComponent } from './pagenotfound.component';

const appRoutes: Routes = [
   { path: '', redirectTo:'/booklist',terminal:true}, 
   { path: 'booklist', component: BookListComponent },  
   { path: '**', component: PageNotFoundComponent }
];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(appRoutes);