import { Component, OnInit } from '@angular/core';
import {ClientServiceService} from '../services/client-service.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  clients : any;
  constructor(private person : ClientServiceService) {
    this.person.getPerson().subscribe((data) =>{
    this.clients = data;
  console.log(data);
  })
  }

  ngOnInit(): void {
  }

}
