import { Component, OnInit } from '@angular/core';
import { LoanServiceService } from '../Service/loan-service.service';
import { CookieService } from 'ngx-cookie-service';
import Web3 from 'web3';
import { log } from 'util';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
public id1;
public check_key;
public address:string;
  public balance:number;

  constructor(private ls:LoanServiceService,private cookie:CookieService) {
   this.check_admin();
   }

  sign_out(){
    this.cookie.delete("privateKey");
  }
  
  acc_balance(){
    this.ls.getAccount().then(add => {
      this.address=add;
      this.ls.getUserBalance(add).then(balance => {
        this.balance = balance;
        (document.getElementById("liid")as HTMLInputElement).innerText="Balance in Eth: "+balance.toString();
      });
    })
  }

  check_admin(){
    this.ls.check_issuer().then(issuer =>  {
      if (issuer == true)
      {
        (document.getElementById("dropid")as HTMLInputElement).hidden=false;
      }
      else 
      { 
        (document.getElementById("dropid")as HTMLInputElement).hidden=true;                
      }
    })
  }

  ngOnInit() {
    var instance =this;
    instance.id1 = setInterval(function() {
      
      instance.ls.check_cookie("privateKey").then(check=>{      
        if(check==false){ 
          (document.getElementById("liid")as HTMLInputElement).innerText="";  
          instance.check_key=check;                                
          clearInterval(this.interval);
        }
        else if(check==true)
        { 
          instance.check_key=check;
          instance.acc_balance();                     
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
