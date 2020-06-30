import { Component, OnInit } from '@angular/core';
import {AppserviceService  } from "../appservice.service";  
import { User } from '../user';


@Component({
  selector: 'app-data-get-put-add',
  templateUrl: './data-get-put-add.component.html',
  styleUrls: ['./data-get-put-add.component.css']
})
export class DataGetPutAddComponent implements OnInit {
  subjects =['male','female','other'];
  title = 'biodata';
  userModel =new User( "", "","", true,"" );
  activeindex=-1;

  constructor(private service: AppserviceService) { };
  user:[];
  

  ngOnInit()
  {
    if(this.activeindex==-1)
    {this.service.enroll(this.userModel)
  .subscribe(
    data => {console.log('success!', data)}
  )
  }
  else
  {
    this.service.updatedata(this.userModel).subscribe(
      data=>{this.ngOnInit();

      })
  };
  {this.service.fetch().subscribe(
    data => {
      this.user = data;
    })
  };


};

  
  delete(_id) {
    
    this.service.deleteData(_id).subscribe(data =>
      {
        this.ngOnInit();
      })
  
  };
  edit(raw,j)
  {
    console.log("raw",raw);
    this.userModel.userfirstname=raw.userfirstname;
    this.userModel.userlastname=raw.userlastname;
    this.userModel.subject=raw.subject;
    this.userModel.subscribe=raw.subscribe;
    this.userModel._id=raw._id;
    this.activeindex=j;

  };
}
