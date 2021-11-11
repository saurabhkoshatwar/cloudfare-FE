import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PostServiceService {

  constructor(private http: HttpClient,) { }

  postsUrl = 'https://main-worker.socialapp.workers.dev/posts';

  getPosts(){
    return this.http.get(this.postsUrl)
  }
}
