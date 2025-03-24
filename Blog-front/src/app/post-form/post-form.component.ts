import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { PostService } from '../_services/post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-form',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './post-form.component.html',
  styleUrl: './post-form.component.css'
})

export class PostFormComponent {
  postService: PostService = inject(PostService);
  router: Router = inject(Router)

  form = new FormGroup({
    title: new FormControl(''),
    body: new FormControl('')
  });

  constructor() {
  }

  submitPost() {
    if (this.form.value.title && this.form.value.body) {
      this.postService.submitPost(this.form.value.title, this.form.value.body);
      this.router.navigate(['/'])
    }
  }

}
