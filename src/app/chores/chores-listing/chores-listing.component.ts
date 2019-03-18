import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Chore } from '../../domain/chore';
import { ChoresService } from '../../shared/chores.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chores-listing',
  templateUrl: './chores-listing.component.html',
  styleUrls: ['./chores-listing.component.css']
})
export class ChoresListingComponent implements OnInit {

  chores$: Observable<Array<Chore>>;

  constructor(private router: Router, private choresService: ChoresService) { }

  ngOnInit() {
    this.chores$ = this.choresService.getAll();
  }

  createChore() {
    this.router.navigate(['/chores/create']);
  }

  editChore(chore: Chore) {
    this.router.navigate(['/chores', chore.id]);
  }

}
