import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Client } from '../Client';


@Injectable({
  providedIn: 'root'
})
export class ClientService {
  baseURL = "http://35.202.38.42:8080/api/";

  constructor(private http: HttpClient) { }

  public getClients() {
    return this.http.get(this.baseURL + "getAllClients");
  }

  public deleteClients(id: string | number) {
    return this.http.delete(this.baseURL + "deleteClient/"+id );
  }

  public getClientById(id: number) {
    return this.http.get(this.baseURL + "getClient/"+id );
  }

  public createClient(client: Client) {
    console.log("createclient"+client);
    return this.http.post(this.baseURL + "addClient/",client );
  }


}
