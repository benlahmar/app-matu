import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from 'src/app/models/iuser';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent  implements OnInit {

  @Input()
  user:IUser
  constructor(private router:Router) { }

  ngOnInit() {}

  navigate(id:number)
  {
    this.router.navigateByUrl('detailsuser/'+id)
  }
}
