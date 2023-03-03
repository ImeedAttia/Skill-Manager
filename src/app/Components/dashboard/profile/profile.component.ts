import { Component } from '@angular/core';
import { TokenStorageService } from 'src/app/Services/token-storage.service';
import { UserService } from 'src/app/Services/user.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  constructor(private userdata : UserService,private tokenStorage : TokenStorageService) { }
  userData : User ={};
  ngOnInit(): void {
    this.refreshProfile()
  }
  refreshProfile(){
    const userAuth = this.tokenStorage.getUser();
    this.userdata.get(userAuth).subscribe(res => {
      this.userData = res;
    })

  }
}
