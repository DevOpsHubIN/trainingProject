import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sender',
  templateUrl: './sender.component.html',
  styleUrls: ['./sender.component.css']
})
export class SenderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  dateSelected : any;

  fetchDateSelected(){
    console.log("Date seleceted is " + this.dateSelected)
  }

}
