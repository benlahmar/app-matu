import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/models/iuser';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-listuser',
  templateUrl: './listuser.component.html',
  styleUrls: ['./listuser.component.scss'],
})
export class ListuserComponent  implements OnInit {

  users:IUser[];
  users1:any
  constructor(private service:UserService) { }

  ngOnInit() {
    this.service.getusers().subscribe(d => {
      console.log(d);
      this.users=d;
    })
  }

}
