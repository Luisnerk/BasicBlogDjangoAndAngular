import { Injectable } from '@angular/core';
import { Post } from '../_interfaces/post';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, throwError } from 'rxjs';
import { environment } from '../../environments/environment';
import { error } from 'console';

@Injectable({
  providedIn: 'root'
})

export class PostService {
  baseUrl = environment.apiUrl;
  postList: Post[] = [];

  constructor(private http: HttpClient) { }
  
  getAllPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.baseUrl+"posts/").pipe(
      map(posts => posts.map((post) => this.refactorPost(post)))
    );
  }

  getSinglePost(postId: number): Observable<Post> {
    return this.http.get<Post>(this.baseUrl + `posts/${postId}/`).pipe(
      map(post => this.refactorPost(post)),
      catchError (error => {
        return throwError(() =>new Error("No se encontró el post"))
      })
    )
  }

  submitPost(title: string, body: string) {
    let post = {
      "title": title,
      "body": body
    }
    this.http.post(`${this.baseUrl}posts/`, post).subscribe()
  }

  refactorPost(post: any): Post {
    return {
      ...post,
      createdAt: post.created_at.split("T")[0]
    }
  }
}
