import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Client } from '../Client';
import { ClientService } from '../service/client.service';


@Component({
  selector: 'app-create-client',
  templateUrl: './create-client.component.html',
  styleUrls: ['./create-client.component.css']
})
export class CreateClientComponent implements OnInit {

  client: Client = new Client();
  message:any;
  constructor(private clientService: ClientService,private router:Router) { }

  ngOnInit(): void {
  }

  public createClient(){
    //alert(1);
    let resp=this.clientService.createClient(this.client);
    resp.subscribe( (data)=> {
      //alert(2);      
      console.log(data);
    }
    );
    //alert(3);      
    this.router.navigate(['clientWorklist']);
  }

}//end of class 
