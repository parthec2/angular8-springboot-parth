import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from '../Client';
import { ClientService } from '../service/client.service';


@Component({
  selector: 'app-update-client',
  templateUrl: './update-client.component.html',
  styleUrls: ['./update-client.component.css']
})
export class UpdateClientComponent implements OnInit {

  id: any;
  client: Client = new Client();
  
  message:any;

  constructor(private clientService: ClientService,private router:Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.client = new Client();
    this.clientService.createClient(this.client);
    this.findByClientId();
  }

  public findByClientId() {
    //console.log(this.id1);
    let resp = this.clientService.getClientById(this.id);
    resp.subscribe((data:any) => {      
      console.log(data as Client);      
      if(data){
        this.client=data;
      }      
    }
    );//end of subscribe

    console.log("Updated Client List");
    
  }//end of findByClientId
 
  public updateClient(){
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



}
