import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { LoanServiceService } from '../Service/loan-service.service';
declare let window: any;
import * as Web3 from 'web3';
import $ from 'jquery';
import { ReturnStatement } from '@angular/compiler';
import { NgxSpinnerService } from "ngx-spinner";
import swal from "sweetalert";


@Component({
  selector: 'app-updateloan',
  templateUrl: './updateloan.component.html',
  styleUrls: ['./updateloan.component.scss']
})
export class UpdateloanComponent implements OnInit, OnDestroy{
public updated_loan_details=[];
public address;
public account;
public id1;
public _web3:any;

public Result_spv_id;
public Result_investor_id;
public result_pool_id;

public status_of_pool;
public is_packed;
  constructor(private ls:LoanServiceService,private router: Router, private spinner:NgxSpinnerService) { }
     
updateloan(text_loan_id,amount){
  this.ls.get_cookie().then(key=>{
  // console.log();
  if(text_loan_id.trim() ==''){
    swal("Please Enter Loan Id")
    return;
  }
  if(amount.trim() ==''){
    swal("Please Enter amount")
    return;
  }
  this.spinner.show();
  // this.ls.getAccount().then(address =>{
  this.ls.loan_status(text_loan_id).then(result=>{
    if(result[0] == 0 && result[1] == 0)
    {
  
      this.ls.update_loan(text_loan_id,amount,0,0,0,key).then(res=>{
        (document.getElementById('id1') as HTMLInputElement).value ='';
        (document.getElementById('id2') as HTMLInputElement).value ='';
        this.spinner.hide();
        if(res == 0) {
          swal("You Rejected this Transaction")
        }
        else if(res == 2) {
          swal("Transaction Failed !")
        }
        else if(res == 1) {
          this.table()
          swal("Loan Amount Updated")
        }
      })
  
    }
    else if(result[0] != 0 && result[1] ==0)
    {
      
        this.ls.update_loan(text_loan_id,amount,1,result[0],0,key).then(res=>{
          (document.getElementById('id1') as HTMLInputElement).value ='';
          (document.getElementById('id2') as HTMLInputElement).value ='';
            this.spinner.hide();
          if(res == 0) {
            swal("You Rejected this Transaction")
          }
          else if(res == 2) {
            swal("Transaction Failed !")
          }
          else if(res == 1) {
            this.table()
            swal("Loan Amount Updated")
          }
        })
      
  }
    else if(result[0] !=0 && result[1] !=0)
    {
      this.ls.update_loan(text_loan_id,amount,2,result[0],result[1],key).then(res=>{
        (document.getElementById('id1') as HTMLInputElement).value ='';
        (document.getElementById('id2') as HTMLInputElement).value ='';
        this.spinner.hide();
        if(res == 0) {
          swal("You Rejected this Transaction")
        }
        else if(res == 2) {
          swal("Transaction Failed !")
        }
        else if(res == 1) {
          this.table()
          swal("Loan Amount Updated")
        }
      })
    }
  })
})
}
                    
  table()
  {
    this.updated_loan_details=[];
    this.ls.loan_ids().then(ids=>{
      ids.forEach(element => {
        let obj={};
        this.ls.borrower_details_map(element).then(result =>{
          obj['loanid']=element;
          obj['borrowerid']=result[0]
          obj['borrowerloanamt']=result[1]
          obj['borrowerintrest']=result[2]
          obj['loanduration']=result[3]
          obj['assetid']=result[4]
          obj['assetdetails']=result[5]
          obj['assetamt']=result[6]
          obj['borrowerpaid']=result[7]   
          this.updated_loan_details.push(obj)                 
        })
      });
    })
  
  }

  ngOnInit() {
    this.table()
 
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
