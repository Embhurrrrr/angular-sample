import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/modules/sign-up/models/user';
import { UserProfileService } from '../../services/user-profile.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent {
  @Input('userInput') user: User | undefined;

  constructor(private userProfileService: UserProfileService) {}

  users: User[] = [];

  ngOnInit(): void {
    this.userProfileService.getUsers().subscribe((data) => {
      this.users = data;
    });
  }
}
