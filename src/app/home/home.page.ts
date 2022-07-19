import { SubmitService } from './../service/submit.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  formLogin: any;
  email_user :string = '';
  password_user : string='';

  constructor(private router:Router,private sub:SubmitService) {
    this.formLogin = new FormGroup(
      {
        email_user: new FormControl(),
        password_user : new FormControl(),
      }
    );
  }
  ngOnInit() {
  }

 async  gotosignup(){
    this.router.navigate(['signup']);
  }
  async login(){
    this.formLogin.get('email_user').setValue(this.email_user);
    this.formLogin.get('password_user').setValue(this.password_user);
    this.sub.login(this.formLogin.value).subscribe(
     async (result:any) => {

         if(result.result==true){

        //  localStorage.setItem("data", JSON.stringify(result.data));
         this.router.navigate(['profile'])
        // let type_user  = result.data['type_user'];
        // switch(type_user){
        //   case "1" : alert("1"); this.router.navigate(['profile']); break;
        //   case "2" : alert("2");this.router.navigate(['profile']); break;
        //   default: alert("default");  this.router.navigate(['login']); break;
        // }

       }
       else{
         alert(result.error_code);
       }

     }
   )

 }
}
