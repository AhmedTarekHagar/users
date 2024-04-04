import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../interfaces/user';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(usersList: User[], searchValue: string): User[] {

    // validate if input is number or is string
    if (Number(searchValue) == Number(searchValue)) {
      // input is number so filter by id
      return usersList.filter((u) => u.id.toString().includes(searchValue))
    } else {
      // input is string so filter by first and last names
      return usersList.filter((u) => (u.first_name + u.last_name).toLowerCase().includes(searchValue.toLowerCase()))
    }
  }

}
