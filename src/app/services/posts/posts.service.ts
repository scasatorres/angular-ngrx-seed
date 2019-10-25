import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PostModel } from 'src/app/models';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private baseUrl = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) { }

  getPosts(): Observable<PostModel[]> {
    return this.http.get<PostModel[]>(`${this.baseUrl}/posts`);
  }

  getPost(postId: string): Observable<PostModel> {
    return this.http.get<PostModel>(`${this.baseUrl}/posts/${postId}`);
  }
}
