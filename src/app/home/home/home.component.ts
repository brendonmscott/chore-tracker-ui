import { Component, OnInit } from '@angular/core';
import { faClipboardList, faUsers } from '@fortawesome/free-solid-svg-icons';
import { faMoneyBillAlt } from '@fortawesome/free-solid-svg-icons/faMoneyBillAlt';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  faClipboardList = faClipboardList;
  faUsers = faUsers;
  faMoneyBillAlt = faMoneyBillAlt;

  constructor() { }

  ngOnInit() {
  }

}
