import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IGetPostRQ } from '../../schema/post/dto/get-post-rq.dto';

@Injectable({
  providedIn: 'root',
})
export class PostService {

  constructor(private httpClient: HttpClient) { }

  public getAllPost() {
    return this.httpClient.get('https://jsonplaceholder.typicode.com/posts')
  }

  public getOnePost(id: string) {
    return this.httpClient.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
  }

  public insertPost(dataRQ: IGetPostRQ) {
    return this.httpClient.post(`https://jsonplaceholder.typicode.com/posts`, dataRQ)
  }

  public updatePost(id: string, dataRQ: IGetPostRQ) {
    return this.httpClient.put(`https://jsonplaceholder.typicode.com/posts/${id}`, dataRQ)
  }

  public deletePost(id: string) {
    return this.httpClient.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
  }

}
