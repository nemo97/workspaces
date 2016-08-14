import { Routes,RouterModule } from '@angular/router';
import { BookComponent } from './book.component';
import { BookListComponent } from './book-list.component';
import { BookMainComponent } from './bookmain.component';
import { StoryBookComponent } from './storybook.component';
import { ChildrenBookComponent } from './childrenbook.component';

const bookRoutes: Routes = [    
  { path: '',
    redirectTo:"/book-center",
    pathMatch:'full'
  },
  {
    path: 'book-center',
    component: BookMainComponent,
    children :[
        { path: 'book',  component: BookComponent },
        { path: 'storybook',  component: StoryBookComponent },
        { path: 'childrenbook',  component: ChildrenBookComponent },
        { path: '',     component: BookListComponent }
    ]    
  }
];

export const bookRoutingProviders: any[] = [

];

export const bookRouting = RouterModule.forChild(bookRoutes);