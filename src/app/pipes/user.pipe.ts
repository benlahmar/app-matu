import { Pipe, PipeTransform } from '@angular/core';
import { IUser } from '../models/iuser';

@Pipe({
  name: 'user'
})
export class UserPipe implements PipeTransform {

  transform(value: IUser[], ...args: string[]): IUser[] {

let res=value.filter(x=> x.name.toLowerCase().indexOf(args[0])>-1 || x.username.toLowerCase().indexOf(args[0])>-1)
return res;
  }

}
