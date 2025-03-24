import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostDisplayComponent } from '../post-display/post-display.component';
import { Post } from '../_interfaces/post';
import { PostService } from '../_services/post.service';

@Component({
  selector: 'app-home',
  imports: [CommonModule, PostDisplayComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  // postService: PostService = Inject(PostService);
  postList: Post[] = []

  constructor(postService: PostService) {
    postService.getAllPosts().subscribe((postList: Post[]) => this.postList = postList)
  }

  // postList: Post[] = [{
  //   id: 0,
  //   title: "Prueba",
  //   body: "Este es un post de prueba",
  //   createdAt: "09/09/2009"
  // }];

  
}
