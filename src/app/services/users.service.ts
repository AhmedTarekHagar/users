import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UsersResponse } from '../interfaces/users-response';
import { User } from '../interfaces/user';
import { UserResponse } from '../interfaces/user-response';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private _HttpClient: HttpClient) { }

  baseURL: string = 'https://reqres.in/api/users';

  getAllUsersReq(page: number = 1): Observable<UsersResponse> {
    return <Observable<UsersResponse>>this._HttpClient.get(`${this.baseURL}?page=${page}`);
  }

  getUserByIDReq(id: number): Observable<UserResponse> {
    return <Observable<UserResponse>>this._HttpClient.get(`${this.baseURL}/${id}`);
  }
}
