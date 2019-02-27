import { Component, OnInit } from '@angular/core';
import { LoanServiceService } from '../Service/loan-service.service';
// import { HeaderComponent } from '../header/header.component';
import { Router } from '@angular/router';
import { NgModule } from '@angular/core';
declare let window: any;
import Web3 from 'web3';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})


export class HomeComponent implements OnInit {
  public account;
  public id1;
  public _web3:any;
  constructor(private ls:LoanServiceService,private router: Router) { 

  }
 



  ngOnInit() {
      var meta=this;
      meta.id1 = setInterval(function() {
        meta.ls.check_cookie("privateKey").then(check=>{    
      
        
          if(check==true){
            meta.ls.privatekey_by_address().then(senderaddress=>{
          
              (document.getElementById("ptag")as HTMLInputElement).hidden=false;
              (document.getElementById("ptag")as HTMLInputElement).innerHTML=senderaddress["address"];         
              clearInterval(this.interval);
            });         
          }       
          else{
            meta.router.navigate(["login"]);
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
