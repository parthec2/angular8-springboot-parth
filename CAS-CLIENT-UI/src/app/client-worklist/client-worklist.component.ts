import { Component, OnInit } from '@angular/core';
import { Client } from '../Client';
import { ClientService } from '../service/client.service';
import { Observable } from 'rxjs';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-client-worklist',
  templateUrl: './client-worklist.component.html',
  styleUrls: ['./client-worklist.component.css']
})
export class ClientWorklistComponent implements OnInit {

  clients: Client[] = [];
  id1: any;

  constructor(private clientService: ClientService,private router:Router) {

  }

  ngOnInit(): void {
    this.getAllClients();
  }

  public getAllClients(){
    let clientList = this.clientService.getClients();
    clientList.subscribe((resp) => {
      this.clients = resp as Client[];
      console.log(resp);
    });
  }

  public deleteUser(id:number) {
    let resp = this.clientService.deleteClients(id);
    this.getAllClients();
    console.log(resp);

    resp.subscribe((data:any) => {      
      
    });
    this.getAllClients();
  }//end of deleteUser

  public editUser(id:number) {
    //alert(id);
    this.router.navigate(['editClient',id]);
  }

  public findByClientId() {
    //console.log(this.id1);
    let resp = null;
    if(this.id1){
      let resp = this.clientService.getClientById(this.id1);
      resp.subscribe((data:any) => {      
        console.log(data as Client);
        this.clients=[];
        if(data){
          this.clients.push(data);
        }      
      }
      );//end of subscribe

    }else{
      this.getAllClients();
    }
    
    

    console.log("Updated Client List");
    
  }//end of findByClientId
 

}//end of class
