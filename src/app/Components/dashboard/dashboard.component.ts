import { Component } from '@angular/core';
import { EntryService } from 'src/app/Services/entry.service';
import { TokenStorageService } from 'src/app/Services/token-storage.service';
import { UserService } from 'src/app/Services/user.service';
import { User } from 'src/app/models/user';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

//Declaration
  //Path of logo img
  LogoImgPath="../../assets/soprahr.png"
  // User Status
  isLoggedIn : boolean = false;
  userData : User ={};
  page : string = "Home";

  constructor(private userdata : UserService,private tokenStorageService: TokenStorageService,private EService : EntryService) { }

  ngOnInit(): void {
    this.isLoggedIn != !this.tokenStorageService.getToken();
    this.refreshProfile()
  }
  //Method to the profile
  refreshProfile(){
    const userAuth = this.tokenStorageService.getUser();
    this.userdata.get(userAuth).subscribe(res => {
      this.userData = res;
    })
  }

  //Method to logout
  signOut(){
    this.EService.signOut();
  }
  status = false;
  addToggle()
  {
    this.status = !this.status;
  }
  PageNavigation(newPage: string) {
    this.page = newPage
  }

}

