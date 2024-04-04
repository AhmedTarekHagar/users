import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { User } from '../interfaces/user';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { Location } from '@angular/common';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  constructor(private _UsersService: UsersService,
    private _ActivatedRoute: ActivatedRoute,
    private _Title: Title,
    private _Location: Location) { }

  ngOnInit(): void {
    this.getUserId();
    this.getUserById(this.userId);
  }

  getUserById(id: number): void {
    this._UsersService.getUserByIDReq(id).subscribe({
      next: (res) => {
        this.userData = res.data;
        this.userDataLoaded = true;
        this._Title.setTitle(`${res.data.first_name} ${res.data.last_name}'s info`);
      },
      error: () => {
        this.noUser = true;
      }
    })
  }

  getUserId() {
    this._ActivatedRoute.params.subscribe((route) => {
      this.userId = route['id'];
    })
  }

  goBack(): void {
    this._Location.back();
  }

  userId!: number;
  userData!: User;
  userDataLoaded: boolean = false;
  noUser: boolean = false;
}
