import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { LoanServiceService } from '../Service/loan-service.service';

import $ from 'jquery';
declare let window: any;
import Web3 from 'web3';
import { NgxSpinnerService } from "ngx-spinner";
import swal from "sweetalert";

@Component({
  selector: 'app-addinvestor',
  templateUrl: './addinvestor.component.html',
  styleUrls: ['./addinvestor.component.scss']
})
export class AddinvestorComponent implements OnInit, OnDestroy {
  public account;
  public id1;
  public _web3:any;

  constructor(private ls:LoanServiceService,private router: Router, private spinner: NgxSpinnerService) { }

  investor_register() {
    this.spinner.show();
    this.ls.get_cookie().then(key =>{
      this.ls.register_investor(key).then(res =>{
        this.spinner.hide();
        if(res == 0) {
          swal("You Rejected this Transaction")
        }
        else if(res == 2) {
          swal("Transaction Failed !")
        }
        else if(res == 1) {
          this.ls.investor_ids().then(inv_ids => {
            swal("You Successfully Registered As An Investor, Your Investor Id Is:  "+inv_ids.length)
          })
        }
      })
    })
  }

  ngOnInit() {   
      let meta = this;
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
