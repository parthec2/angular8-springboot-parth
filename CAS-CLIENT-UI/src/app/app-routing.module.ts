import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ClientWorklistComponent } from './client-worklist/client-worklist.component';
import { CreateClientComponent } from './create-client/create-client.component';
import { UpdateClientComponent } from './update-client/update-client.component';

const routes: Routes = [
  {path:"", redirectTo:"clientWorklist", pathMatch:"full"},
  {path:"clientWorklist",component: ClientWorklistComponent},
  {path:"createClient",component: CreateClientComponent},
  {path:"editClient/:id",component: UpdateClientComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
