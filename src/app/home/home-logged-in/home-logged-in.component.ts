import { Component, OnInit } from '@angular/core';
import { faClipboardList, faUsers } from '@fortawesome/free-solid-svg-icons';
import { faMoneyBillAlt } from '@fortawesome/free-solid-svg-icons/faMoneyBillAlt';

@Component({
  selector: 'app-home-logged-in',
  templateUrl: './home-logged-in.component.html',
  styleUrls: ['./home-logged-in.component.css']
})
export class HomeLoggedInComponent implements OnInit {

  faClipboardList = faClipboardList;
  faUsers = faUsers;
  faMoneyBillAlt = faMoneyBillAlt;

  constructor() { }

  ngOnInit() {
  }

}
