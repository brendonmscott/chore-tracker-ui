import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../shared/users.service';
import { AuthService } from '../../shared/auth.service';
import { User } from '../../domain/user';

@Component({
  selector: 'app-family-list',
  templateUrl: './family-list.component.html',
  styleUrls: ['./family-list.component.css']
})
export class FamilyListComponent implements OnInit {

  familyMembers$: User[];

  constructor(public usersService: UsersService,
              public authService: AuthService) { }

  ngOnInit() {

    this.usersService.get(this.authService.currentUser.id).subscribe(res => {
      console.log(res);
      this.familyMembers$ = res.familyMembers;
    });

  }
}
