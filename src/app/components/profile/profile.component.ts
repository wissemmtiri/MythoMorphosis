import { Component } from '@angular/core';
import { Profile } from 'src/app/models/user/profile-dto';
import { ProfileService } from 'src/app/services/profile-service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  profile! :Profile;
  constructor(private profileService: ProfileService) {  
  }
  ngOnInit() {
    this.getProfile();
  }
  getProfile(){
    this.profileService.getProfile().subscribe({
      next: (res) => {
        console.log(res);
        this.profile= res;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  updateProfile() {
    console.log(Profile);
    this.profileService.updateProfile(this.profile).subscribe({
      next: (res) => {
        console.log('Profile updated successfully:', res);
      },
      error: (err) => {
        console.error('Error updating profile:', err);
      },
    });
  }
}
