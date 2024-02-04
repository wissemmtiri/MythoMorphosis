import { Component, OnInit } from '@angular/core';
import { UserStoreService } from 'src/app/services/user-store.service';

@Component({
  selector: 'app-sidenavbar',
  templateUrl: './sidenavbar.component.html',
  styleUrls: ['./sidenavbar.component.css'],
})
export class SidenavbarComponent implements OnInit {
  public fullName: string = '';
  constructor(private userStore: UserStoreService) {}
  ngOnInit(): void {
    this.userStore.getProfile().subscribe({
      next: (res) => {
        console.log(res);
        this.fullName = res.firstname + ' ' + res.lastname;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
