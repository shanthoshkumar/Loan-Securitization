import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { LoanServiceService } from '../Service/loan-service.service';
import $ from 'jquery';
import * as Web3 from 'web3';
declare let window: any;
import { NgxSpinnerService } from "ngx-spinner";
import swal from "sweetalert";

@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.component.html',
  styleUrls: ['./withdraw.component.scss']
})
export class WithdrawComponent implements OnInit, OnDestroy {
  public bank_id;
  public borrower_id;
  public loan_details=[];
  public balance:number;
  public account;
  public id1;
  public amount : any;
  public _web3:any;

  constructor(private ls:LoanServiceService,private router: Router,private spinner: NgxSpinnerService) { 

    $("#issuer").addClass("active");
    $("#spv").removeClass("active");
    $("#investor").removeClass("active");

    this.borrower_id='';
    this.bank_id='';
    this.ls.contract_balance().then(result=>this.balance=result/1000000000000000000)
  }

  withdraw(amount)
  {
  //  console.log("withdraw");
   
   
    if(amount.trim() == '' || amount<=0){
      swal("Please Enter a valid amount");
      return;
    }
    
   
    this.ls.contract_balance().then(result=> {
    
    if(result <amount*1000000000000000000){
     swal("You Can withdraw upto " +result/1000000000000000000);
     (document.getElementById('id1') as HTMLInputElement).value = '';
    // // /1000000000000000000
    return;
    }
    
    
 this.spinner.show(); 

 
 this.ls.get_cookie().then(key=>{      
      this.ls.issuer_withdraw(amount*1000000000000000000,key).then(res=>{
        (document.getElementById('id1') as HTMLInputElement).value ='';
        this.spinner.hide();
        if(res == 0) {
          swal("You Rejected the Transaction")
        }
        else if(res == 2) {
          (document.getElementById('id1') as HTMLInputElement).value = '';
          swal("Transaction Failed !")
        }
        else if(res == 1)
        {
          (document.getElementById('id1') as HTMLInputElement).value = '';
          this.fetch();
          swal("Amount Credited to Your Wallet")          
        }

    })
  
  });
});
}

fetch()
    {
      this.ls.contract_balance().then(result=>{this.balance=result/1000000000000000000;
      })
    }


  ngOnInit() {
  
      this.fetch();
      var meta=this;
      meta.id1 = setInterval(function() {
        meta.ls.check_cookie("privateKey").then(check=>{
          if(check==false){
            meta.router.navigate(["login"]);
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