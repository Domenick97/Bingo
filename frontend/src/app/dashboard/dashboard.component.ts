import { Component, OnInit } from '@angular/core';
import { PartyService } from '../services/party.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public isReady = true;

  constructor(private partyService: PartyService) { }

  ngOnInit(): void {

    this.partyService.isPartyReady().subscribe(x=>{
      console.log("IsReady: ", x);
      this.isReady = x;
    })
  }

}
