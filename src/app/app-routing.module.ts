import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SenderComponent } from './sender/sender.component';

const routes: Routes = [
  
  { path : '' , component : HomeComponent } , 
  
  { path : 'sender' , component : SenderComponent } , 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
