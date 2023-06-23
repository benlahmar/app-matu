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
  data:IUser[]
  users1:any;
  a:any
  constructor(private service:UserService) { }

  ngOnInit() {
    this.service.getusers().subscribe(d => {
      console.log(d);
      this.users=d;
      this.data=d
      localStorage.setItem('data',JSON.stringify(d));
     
    })
  }

  filtre(event:any)
  {
    
    let v= event.target.value.toLowerCase();
    console.log(v)
    
    this.data= this.users.filter(x=> x.name.toLowerCase().indexOf(v) > -1 || x.username.toLowerCase().indexOf(v)>-1);
    console.log(this.users)
  }

}
