import { Component, OnInit } from '@angular/core';
import { UserService } from '../users.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit
 {
  users: string[];

  constructor(private userService: UserService) {
    console.log("Here2");
  }

  ngOnInit() {
    this.users = this.userService.inactiveUsers;
    console.log("Here3");
  }

  onSetToActive(id: number) {
    console.log("Here");
    this.userService.setToActive(id);
  }
}
