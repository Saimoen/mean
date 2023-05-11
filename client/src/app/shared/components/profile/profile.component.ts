import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../../shared/interfaces/user.interface';
import { AuthService } from '../../../shared/services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  public user$: Observable<User | null> = this.authService.user$.asObservable();

  constructor(private authService: AuthService) {}

  ngOnInit(): void {}
}
