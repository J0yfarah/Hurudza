import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  constructor(private router:Router) { }
  data:any;
  datauser:any;
  ngOnInit() {
    this.data = localStorage.getItem("data");

    this.datauser = JSON.parse(this.data);
  }
  logout(){
    localStorage.removeItem('data');
    this.router.navigate(['home']);
  }
async dismiss(){
  console.log('dismiss')
}
}
