import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import { PostFormComponent } from './post-form/post-form.component';

export const routes: Routes = [
    {
        path:'',
        component: HomeComponent,
        title: 'Home'
    },
    {
        path: 'post/:id',
        component: PostDetailsComponent,
        title: 'Detail'
    },
    {
        path: 'post',
        component: PostFormComponent,
        title: "Subir post"
    },
];
