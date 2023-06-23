import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IUser } from 'src/app/models/iuser';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-detailsuser',
  templateUrl: './detailsuser.page.html',
  styleUrls: ['./detailsuser.page.scss'],
})
export class DetailsuserPage implements OnInit {
id:number
user:IUser
name:string

  constructor(private service:UserService, private route:ActivatedRoute) { }

  ngOnInit() {
    console.log("debut............")
    this.route.params.subscribe((x) => {
       console.log(x); this.id=x['id'];
       this.service.getuserbyid(this.id).subscribe(d => {this.user=d; this.name=d.name})

      });

   

    console.log("fin............")
   
  }

}
