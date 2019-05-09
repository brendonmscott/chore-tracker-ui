import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../shared/users.service';
import { AuthService } from '../../shared/auth.service';
import { User } from '../../domain/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-family-list',
  templateUrl: './family-list.component.html',
  styleUrls: ['./family-list.component.css']
})
export class FamilyListComponent implements OnInit {

  familyMembers$: User[] = [];

  constructor(private router: Router,
              public usersService: UsersService,
              public authService: AuthService) { }

  ngOnInit() {

    this.usersService.get(this.authService.currentUser.id).subscribe(res => {

      this.familyMembers$.push(...res.familyMembers);

      const newUser = new User();
      newUser.firstName = 'New';

      this.familyMembers$.push(newUser);
    });
  }

  editFamilyMember(familyMember: User) {
    this.router.navigate(['/family', familyMember.id]);
  }
}
