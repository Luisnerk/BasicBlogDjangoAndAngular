import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../_services/post.service';
import { CommonModule } from '@angular/common';
import { Post } from '../_interfaces/post';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-post-details',
  imports: [CommonModule, RouterModule],
  templateUrl: './post-details.component.html',
  styleUrl: './post-details.component.css'
})

export class PostDetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  postService: PostService = inject(PostService);
  postId: number = 0;
  post: Post | undefined = undefined;

  constructor() {
    this.postId = parseInt(this.route.snapshot.params['id'], 10);
    this.postService.getSinglePost(this.postId).subscribe({
      next: (post: Post) => this.post = post,
      error: (err) => {console.log(err.message); this.post = undefined}
    });
  }
  
}
