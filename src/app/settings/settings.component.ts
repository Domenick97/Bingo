import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  tab: number;

  constructor(private route: ActivatedRoute,
    private router: Router,) { }

  ngOnInit() {
    this.tab = 1;
  }

  navToHome(){
    this.router.navigate(['/'])
  }
}
