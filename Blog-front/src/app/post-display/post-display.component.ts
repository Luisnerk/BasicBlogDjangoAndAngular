import { Component } from '@angular/core';
import { Post } from '../_interfaces/post';
import { Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-post-display',
  imports: [RouterModule],
  templateUrl: './post-display.component.html',
  styleUrl: './post-display.component.css'
})

export class PostDisplayComponent {
  @Input() post!: Post;
  constructor(){
  }


}