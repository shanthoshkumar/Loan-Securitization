import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import Web3 from 'web3';
import { LoanServiceService} from "../Service/loan-service.service";
import { Router } from "@angular/router";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public canshow:boolean;
  public account;
  public id1;
  constructor(private ls: LoanServiceService, private router: Router) { }

  prikey(privatekey){
    var meta=this;
    this.ls.set_cookie(privatekey);
  }
  ngOnInit() {
 
    let meta = this;    
   meta.id1 = setInterval(function() {
     meta.ls.check_cookie("privateKey").then(check=>{
       if(check==false){
         meta.router.navigate(["login"]);
         clearInterval(this.interval);
       }
       else{
        meta.router.navigate(["home"]);
        clearInterval(this.interval);
       }
     })
   }),200
  }
  ngOnDestroy() {
    if (this.id1) {
      clearInterval(this.id1);
    }

  }

}
