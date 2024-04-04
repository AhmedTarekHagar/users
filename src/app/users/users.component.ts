import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { Router } from '@angular/router';
import { Support } from '../interfaces/support';
import { UsersResponse } from '../interfaces/users-response';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})

export class UsersComponent implements OnInit {
  constructor(private _UsersService: UsersService, private _Router: Router) { }

  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers(page:number = 1): void {
    this._UsersService.getAllUsersReq(page).subscribe({
      next: (res) => {
        this.dataLoaded = false;
        this.response = res;
        this.saveSupportDataInLocalStorage(res.support);
        this.dataLoaded = true;
      },
      error: () => {
        this._Router.navigate(['/notfound']);
      }
    })
  }

  saveSupportDataInLocalStorage(data: Support): void {
    localStorage.setItem('supportData', JSON.stringify(data));
  }

  pageChanged(event:number):void{
    this.getAllUsers(event);
  }

  response!: UsersResponse;
  dataLoaded: boolean = false;
  searchInputValue:string = '';
}
