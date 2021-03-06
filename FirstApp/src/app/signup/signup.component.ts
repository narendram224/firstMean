import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  registeruserdata= {}
  constructor(private  _auth : AuthService,private _router:Router) { }

  ngOnInit() {
  }

  registerUser(){
    this._auth.registerUser(this.registeruserdata)
    .subscribe(
      res =>{console.log(res)
        localStorage.setItem('token',res.token)
        this._router.navigate(['events'])
      },
      err =>console.log(err)
    )
  }

}
